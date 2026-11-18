import { useMemo, useState } from 'react';
import { LessonData } from '../types/study';
import { StudyProgress } from '../types/study';
import { FlashcardDeck, TaggedFlashcard } from './FlashcardDeck';
import { QuizSection, TaggedQuestion } from './QuizSection';

interface MixedHubProps {
  mode: 'quiz' | 'flashcards';
  lessons: LessonData[];
  progress: StudyProgress;
  onMarkCard: (cardId: string, status: 'known' | 'review') => void;
  onRecordQuizResult: (
    lessonId: number | null,
    correct: number,
    total: number,
    correctIds: string[]
  ) => void;
}

export function MixedHub({
  mode,
  lessons,
  progress,
  onMarkCard,
  onRecordQuizResult,
}: MixedHubProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>(() => lessons.map((l) => l.id));

  const toggleLesson = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].sort((a, b) => a - b)
    );
  };

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const mixedCards = useMemo<TaggedFlashcard[]>(() => {
    const out: TaggedFlashcard[] = [];
    for (const l of lessons) {
      if (!selectedSet.has(l.id)) continue;
      for (const c of l.flashcards) {
        out.push({ ...c, lessonTitle: `${l.id}. Ders` });
      }
    }
    return out;
  }, [lessons, selectedSet]);

  const mixedQuestions = useMemo<TaggedQuestion[]>(() => {
    const out: TaggedQuestion[] = [];
    for (const l of lessons) {
      if (!selectedSet.has(l.id)) continue;
      for (const q of l.questions) {
        out.push({ ...q, lessonTitle: `${l.id}. Ders` });
      }
    }
    return out;
  }, [lessons, selectedSet]);

  return (
    <div className="container">
      <div className="card" style={{ padding: 14, marginBottom: 14 }}>
        <div className="controls-bar" style={{ marginBottom: 8 }}>
          <strong>
            {mode === 'quiz' ? 'Karma Deneme Sınavı — Dahil Edilecek Dersler' : 'Karma Öğrenme Kartları — Ders Seçimi'}
          </strong>
          <div className="filter-pills">
            <button
              type="button"
              className="chip"
              onClick={() => setSelectedIds(lessons.map((l) => l.id))}
            >
              Tümünü Seç
            </button>
            <button
              type="button"
              className="chip"
              onClick={() => setSelectedIds([1, 2, 3, 4])}
            >
              1–4. Dersler
            </button>
          </div>
        </div>

        <div className="filter-pills">
          {lessons.map((l) => {
            const active = selectedSet.has(l.id);
            return (
              <button
                key={l.id}
                type="button"
                className={`chip ${active ? 'active' : ''}`}
                onClick={() => toggleLesson(l.id)}
              >
                {l.id}. {l.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {selectedIds.length === 0 ? (
        <div className="card empty-state">En az bir ders seçmelisin.</div>
      ) : mode === 'flashcards' ? (
        <FlashcardDeck
          cards={mixedCards}
          knownCards={progress.knownCards}
          reviewCards={progress.reviewCards}
          onMarkCard={onMarkCard}
        />
      ) : (
        <QuizSection
          questions={mixedQuestions}
          lessonId={null}
          onRecordResult={onRecordQuizResult}
        />
      )}
    </div>
  );
}
