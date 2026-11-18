import { useCallback, useEffect, useState } from 'react';
import { StudyProgress } from '../types/study';

const PROGRESS_KEY = 'ata121_study_progress_v1';
const SETTINGS_KEY = 'ata121_ui_settings_v1';

const DEFAULT_PROGRESS: StudyProgress = {
  completedSections: {},
  knownCards: {},
  reviewCards: {},
  lessonBestScores: {},
  answeredCorrectly: {},
};

export interface UiSettings {
  theme: 'light' | 'dark';
  fontSize: 'sm' | 'md' | 'lg';
}

const DEFAULT_SETTINGS: UiSettings = {
  theme: 'light',
  fontSize: 'md',
};

function safeRead<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) };
  } catch {
    return fallback;
  }
}

export function useStudyProgress() {
  const [progress, setProgress] = useState<StudyProgress>(() =>
    safeRead(PROGRESS_KEY, DEFAULT_PROGRESS)
  );
  const [settings, setSettings] = useState<UiSettings>(() =>
    safeRead(SETTINGS_KEY, DEFAULT_SETTINGS)
  );

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage quota issues
    }
  }, [progress]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-font', settings.fontSize);
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  const toggleSectionDone = useCallback((sectionId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedSections: {
        ...prev.completedSections,
        [sectionId]: !prev.completedSections[sectionId],
      },
    }));
  }, []);

  const markCardStatus = useCallback((cardId: string, status: 'known' | 'review') => {
    setProgress((prev) => {
      const nextKnown = { ...prev.knownCards };
      const nextReview = { ...prev.reviewCards };
      if (status === 'known') {
        nextKnown[cardId] = true;
        delete nextReview[cardId];
      } else {
        nextReview[cardId] = true;
        delete nextKnown[cardId];
      }
      return { ...prev, knownCards: nextKnown, reviewCards: nextReview };
    });
  }, []);

  const recordQuizResult = useCallback(
    (lessonId: number | null, correct: number, total: number, correctIds: string[]) => {
      setProgress((prev) => {
        const nextAnswered = { ...prev.answeredCorrectly };
        for (const id of correctIds) nextAnswered[id] = true;

        const nextScores = { ...prev.lessonBestScores };
        if (lessonId !== null && total > 0) {
          const prevBest = nextScores[lessonId];
          const prevPct = prevBest ? prevBest.correct / prevBest.total : -1;
          const curPct = correct / total;
          if (!prevBest || curPct >= prevPct) {
            nextScores[lessonId] = {
              correct,
              total,
              updatedAt: new Date().toISOString(),
            };
          }
        }
        return {
          ...prev,
          answeredCorrectly: nextAnswered,
          lessonBestScores: nextScores,
        };
      });
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setSettings((s) => ({ ...s, theme: s.theme === 'light' ? 'dark' : 'light' }));
  }, []);

  const cycleFontSize = useCallback(() => {
    setSettings((s) => ({
      ...s,
      fontSize: s.fontSize === 'sm' ? 'md' : s.fontSize === 'md' ? 'lg' : 'sm',
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
  }, []);

  return {
    progress,
    settings,
    toggleSectionDone,
    markCardStatus,
    recordQuizResult,
    toggleTheme,
    cycleFontSize,
    resetAllProgress,
  };
}
