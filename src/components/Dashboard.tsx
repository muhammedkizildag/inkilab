import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Layers,
  RotateCcw,
} from 'lucide-react';
import { LessonData, StudyProgress } from '../types/study';
import { LessonTab } from './LessonView';

interface DashboardProps {
  lessons: LessonData[];
  progress: StudyProgress;
  onOpenLesson: (lessonId: number, tab: LessonTab) => void;
  onOpenMixedQuiz: () => void;
  onOpenMixedCards: () => void;
  onResetProgress: () => void;
}

export function Dashboard({
  lessons,
  progress,
  onOpenLesson,
  onOpenMixedQuiz,
  onOpenMixedCards,
  onResetProgress,
}: DashboardProps) {
  const [confirmReset, setConfirmReset] = useState(false);

  const totalSlides = lessons.reduce((acc, l) => acc + l.totalSlides, 0);
  const totalSections = lessons.reduce((acc, l) => acc + l.sections.length, 0);
  const totalCards = lessons.reduce((acc, l) => acc + l.flashcards.length, 0);
  const totalQuestions = lessons.reduce((acc, l) => acc + l.questions.length, 0);

  const doneSections = lessons.reduce(
    (acc, l) => acc + l.sections.filter((s) => progress.completedSections[s.id]).length,
    0
  );
  const knownCardsCount = lessons.reduce(
    (acc, l) => acc + l.flashcards.filter((c) => progress.knownCards[c.id]).length,
    0
  );
  const solvedQuestionsCount = lessons.reduce(
    (acc, l) => acc + l.questions.filter((q) => progress.answeredCorrectly[q.id]).length,
    0
  );

  return (
    <div className="container">
      <section className="hero-card">
        <div className="hero-top">
          <div>
            <div className="hero-kicker">
              <GraduationCap size={15} /> ATA 121 · Atatürk İlkeleri ve İnkılâp Tarihi
            </div>
            <h1 className="hero-title">Ders Notları, Kartlar ve Test Sınavları</h1>
            <p className="hero-desc">
              7 ders sunumunun tamamındaki <strong>{totalSlides} slayt</strong> tek tek incelenip
              madde madde notlara, öğrenme kartlarına ve çoktan seçmeli testlere dönüştürüldü.
            </p>
          </div>
          <span className="pill success">
            <CheckCircle2 size={14} /> {totalSlides}/{totalSlides} Slayt Kapsandı
          </span>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-value">
              {doneSections} / {totalSections}
            </div>
            <div className="stat-label">Okunan Bölüm</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">
              {knownCardsCount} / {totalCards}
            </div>
            <div className="stat-label">Öğrenilen Kart</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">
              {solvedQuestionsCount} / {totalQuestions}
            </div>
            <div className="stat-label">Doğru Çözülen Test</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{totalSlides}</div>
            <div className="stat-label">Toplam Slayt</div>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <button type="button" className="action-tile" onClick={onOpenMixedQuiz}>
          <div className="action-icon">
            <ClipboardCheck size={22} />
          </div>
          <div>
            <div className="action-title">Genel Karma Test Sınavı</div>
            <div className="action-sub">
              Ders seçimi yaparak {totalQuestions} soruluk havuzdan deneme çöz
            </div>
          </div>
        </button>

        <button type="button" className="action-tile" onClick={onOpenMixedCards}>
          <div className="action-icon accent">
            <Layers size={22} />
          </div>
          <div>
            <div className="action-title">Karma Öğrenme Kartları</div>
            <div className="action-sub">
              Tüm derslerden {totalCards} kavram ve tarih kartını karıştırarak çalış
            </div>
          </div>
        </button>
      </section>

      <div className="section-head">
        <h2>Dersler (1–7)</h2>
        {!confirmReset ? (
          <button
            type="button"
            className="chip"
            onClick={() => setConfirmReset(true)}
            title="Kayıtlı ilerlemeyi sıfırla"
          >
            <RotateCcw size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            İlerlemeyi Sıfırla
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              type="button"
              className="chip active"
              onClick={() => {
                onResetProgress();
                setConfirmReset(false);
              }}
            >
              Eminim, Sıfırla
            </button>
            <button type="button" className="chip" onClick={() => setConfirmReset(false)}>
              Vazgeç
            </button>
          </div>
        )}
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => {
          const secDone = lesson.sections.filter(
            (s) => progress.completedSections[s.id]
          ).length;
          const cardKnown = lesson.flashcards.filter((c) => progress.knownCards[c.id]).length;
          const best = progress.lessonBestScores[lesson.id];

          const pct = Math.round(
            ((secDone / Math.max(1, lesson.sections.length)) * 0.5 +
              (cardKnown / Math.max(1, lesson.flashcards.length)) * 0.5) *
              100
          );

          return (
            <article key={lesson.id} className="lesson-card">
              <div>
                <div className="lesson-card-top">
                  <div className="lesson-num">{lesson.id}</div>
                  <div>
                    <h3 className="lesson-title">{lesson.title}</h3>
                    <p className="lesson-sub">{lesson.subtitle}</p>
                  </div>
                </div>

                <div className="lesson-meta" style={{ marginTop: 12 }}>
                  <span className="pill">{lesson.totalSlides} Slayt</span>
                  <span className="pill">
                    {secDone}/{lesson.sections.length} Bölüm
                  </span>
                  <span className="pill">
                    {cardKnown}/{lesson.flashcards.length} Kart
                  </span>
                  <span className="pill">{lesson.questions.length} Test</span>
                  {best && (
                    <span className="pill success">
                      En İyi Test: %{Math.round((best.correct / best.total) * 100)}
                    </span>
                  )}
                </div>

                <div className="progress-track" style={{ marginTop: 10 }}>
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="lesson-actions">
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => onOpenLesson(lesson.id, 'notlar')}
                >
                  <BookOpen size={15} /> Notlar
                </button>
                <button
                  type="button"
                  className="btn outline"
                  onClick={() => onOpenLesson(lesson.id, 'kartlar')}
                >
                  <Layers size={15} /> Kartlar
                </button>
                <button
                  type="button"
                  className="btn outline"
                  onClick={() => onOpenLesson(lesson.id, 'test')}
                >
                  <ClipboardCheck size={15} /> Test
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
