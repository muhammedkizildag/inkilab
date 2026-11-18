import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { LessonData } from '../types/study';
import { LessonTab } from './LessonView';

interface GlobalSearchProps {
  lessons: LessonData[];
  onNavigateLesson: (lessonId: number, tab: LessonTab, sectionId?: string) => void;
}

interface SearchHit {
  key: string;
  lessonId: number;
  lessonTitle: string;
  tab: LessonTab;
  sectionId?: string;
  kind: 'Not' | 'Kart' | 'Test';
  title: string;
  snippet: string;
  slideLabel: string;
}

export function GlobalSearch({ lessons, onNavigateLesson }: GlobalSearchProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr-TR');
    if (q.length < 2) return [];

    const hits: SearchHit[] = [];

    for (const lesson of lessons) {
      for (const sec of lesson.sections) {
        const haystacks: string[] = [sec.title, sec.summary ?? ''];
        for (const b of sec.bullets) {
          haystacks.push(b.highlight ?? '', b.text, ...(b.subBullets ?? []));
        }
        for (const co of sec.callouts ?? []) {
          haystacks.push(co.title, co.content);
        }
        for (const tbl of sec.tables ?? []) {
          haystacks.push(tbl.caption ?? '', ...tbl.rows.flat());
        }

        const matchedText = haystacks.find((t) =>
          t.toLocaleLowerCase('tr-TR').includes(q)
        );
        if (matchedText) {
          hits.push({
            key: `sec-${sec.id}`,
            lessonId: lesson.id,
            lessonTitle: lesson.shortTitle,
            tab: 'notlar',
            sectionId: sec.id,
            kind: 'Not',
            title: sec.title,
            snippet: matchedText.slice(0, 180),
            slideLabel: `Slayt ${sec.slides[0]}–${sec.slides[sec.slides.length - 1]}`,
          });
        }
      }

      for (const card of lesson.flashcards) {
        if (
          card.front.toLocaleLowerCase('tr-TR').includes(q) ||
          card.back.toLocaleLowerCase('tr-TR').includes(q)
        ) {
          hits.push({
            key: `card-${card.id}`,
            lessonId: lesson.id,
            lessonTitle: lesson.shortTitle,
            tab: 'kartlar',
            kind: 'Kart',
            title: card.front,
            snippet: card.back.slice(0, 180),
            slideLabel: `Slayt ${card.slide}`,
          });
        }
      }

      for (const question of lesson.questions) {
        if (
          question.question.toLocaleLowerCase('tr-TR').includes(q) ||
          question.explanation.toLocaleLowerCase('tr-TR').includes(q)
        ) {
          hits.push({
            key: `q-${question.id}`,
            lessonId: lesson.id,
            lessonTitle: lesson.shortTitle,
            tab: 'test',
            kind: 'Test',
            title: question.question,
            snippet: question.explanation.slice(0, 180),
            slideLabel: `Slayt ${question.slide}`,
          });
        }
      }
    }

    return hits.slice(0, 60);
  }, [lessons, query]);

  return (
    <div className="container">
      <div className="search-box">
        <Search size={19} color="var(--text-subtle)" />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Kavram, tarih, antlaşma veya kişi ara (ör. Tanzimat, 1908, Wilson)..."
        />
      </div>

      {query.trim().length < 2 ? (
        <div className="card empty-state">
          Aramaya başlamak için en az 2 karakter yaz. Tüm 7 dersin notları, kartları ve
          test soruları içinde arama yapılır.
        </div>
      ) : results.length === 0 ? (
        <div className="card empty-state">
          “{query}” için sonuç bulunamadı.
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-subtle)', marginBottom: 10 }}>
            {results.length} sonuç gösteriliyor
          </p>
          {results.map((hit) => (
            <button
              key={hit.key}
              type="button"
              className="search-result-item"
              onClick={() => onNavigateLesson(hit.lessonId, hit.tab, hit.sectionId)}
            >
              <div className="lesson-meta" style={{ marginBottom: 6 }}>
                <span className="pill primary">{hit.lessonTitle}</span>
                <span className="pill">{hit.kind}</span>
                <span className="pill">{hit.slideLabel}</span>
              </div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{hit.title}</div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                {hit.snippet}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
