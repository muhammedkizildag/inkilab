export interface NoteBullet {
  text: string;
  slides?: number[];
  subBullets?: string[];
  highlight?: string;
}

export interface NoteTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface NoteCallout {
  type: 'info' | 'quote' | 'warning' | 'compare';
  title: string;
  content: string;
  slides?: number[];
}

export interface NoteSection {
  id: string;
  title: string;
  slides: number[];
  summary?: string;
  bullets: NoteBullet[];
  tables?: NoteTable[];
  callouts?: NoteCallout[];
}

export type FlashcardCategory =
  | 'Kavram'
  | 'Tarih / Olay'
  | 'Kişi / Eser'
  | 'Antlaşma / Kurum'
  | 'Karşılaştırma / Özellik';

export interface Flashcard {
  id: string;
  category: FlashcardCategory;
  front: string;
  back: string;
  slide: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  slide: number;
}

export interface LessonData {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  sourceFile: string;
  totalSlides: number;
  overview: string;
  sections: NoteSection[];
  flashcards: Flashcard[];
  questions: QuizQuestion[];
}

export interface StudyProgress {
  completedSections: Record<string, boolean>;
  knownCards: Record<string, boolean>;
  reviewCards: Record<string, boolean>;
  lessonBestScores: Record<number, { correct: number; total: number; updatedAt: string }>;
  answeredCorrectly: Record<string, boolean>;
}
