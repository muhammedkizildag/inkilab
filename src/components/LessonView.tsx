import { BookOpen, CheckCircle2, ClipboardCheck, Layers } from 'lucide-react';
import { LessonData } from '../types/study';
import { StudyProgress } from '../types/study';
import { NotesSection } from './NotesSection';
import { FlashcardDeck } from './FlashcardDeck';
import { QuizSection } from './QuizSection';

export type LessonTab = 'notlar' | 'kartlar' | 'test';

interface LessonViewProps {
  lesson: LessonData;
  activeTab: LessonTab;
  onChangeTab: (tab: LessonTab) => void;
  progress: StudyProgress;
  onToggleSectionDone: (sectionId: string) => void;
  onMarkCard: (cardId: string, status: 'known' | 'review') => void;
  onRecordQuizResult: (
    lessonId: number | null,
    correct: number,
    total: number,
    correctIds: string[]
  ) => void;
}

export function LessonView({
  lesson,
  activeTab,
  onChangeTab,
  progress,
  onToggleSectionDone,
  onMarkCard,
  onRecordQuizResult,
}: LessonViewProps) {
  return (
    <div className="container">
      <div className="card lesson-banner">
        <div className="lesson-meta" style={{ marginBottom: 8 }}>
          <span className="pill primary">{lesson.id}. Ders</span>
          <span className="pill success">
            <CheckCircle2 size={13} /> {lesson.totalSlides}/{lesson.totalSlides} Slayt Kapsandı
          </span>
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.overview}</p>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
          Kaynak: {lesson.sourceFile}
        </div>
      </div>

      <div className="tab-bar">
        <div className="segmented" role="tablist" aria-label="Ders çalışma modları">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'notlar'}
            className={`seg-btn ${activeTab === 'notlar' ? 'active' : ''}`}
            onClick={() => onChangeTab('notlar')}
          >
            <BookOpen size={16} />
            <span>Notlar</span>
            <span className="seg-count">{lesson.sections.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'kartlar'}
            className={`seg-btn ${activeTab === 'kartlar' ? 'active' : ''}`}
            onClick={() => onChangeTab('kartlar')}
          >
            <Layers size={16} />
            <span>Kartlar</span>
            <span className="seg-count">{lesson.flashcards.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'test'}
            className={`seg-btn ${activeTab === 'test' ? 'active' : ''}`}
            onClick={() => onChangeTab('test')}
          >
            <ClipboardCheck size={16} />
            <span>Test</span>
            <span className="seg-count">{lesson.questions.length}</span>
          </button>
        </div>
      </div>

      {activeTab === 'notlar' && (
        <NotesSection
          lesson={lesson}
          completedSections={progress.completedSections}
          onToggleSectionDone={onToggleSectionDone}
          onGoToFlashcards={() => onChangeTab('kartlar')}
        />
      )}

      {activeTab === 'kartlar' && (
        <FlashcardDeck
          cards={lesson.flashcards}
          knownCards={progress.knownCards}
          reviewCards={progress.reviewCards}
          onMarkCard={onMarkCard}
        />
      )}

      {activeTab === 'test' && (
        <QuizSection
          questions={lesson.questions}
          lessonId={lesson.id}
          onRecordResult={onRecordQuizResult}
        />
      )}
    </div>
  );
}
