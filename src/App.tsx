import { useEffect, useState } from 'react';
import { lessons } from './data/lessons';
import { useStudyProgress } from './hooks/useStudyProgress';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LessonTab, LessonView } from './components/LessonView';
import { GlobalSearch } from './components/GlobalSearch';
import { MixedHub } from './components/MixedHub';

type RouteState =
  | { view: 'home' }
  | { view: 'search' }
  | { view: 'mixed-quiz' }
  | { view: 'mixed-cards' }
  | { view: 'lesson'; lessonId: number; tab: LessonTab };

function parseHash(): RouteState {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { view: 'home' };
  if (hash === 'arama') return { view: 'search' };
  if (hash === 'karma-sinav') return { view: 'mixed-quiz' };
  if (hash === 'karma-kartlar') return { view: 'mixed-cards' };

  const match = hash.match(/^ders\/(\d+)(?:\/(notlar|kartlar|test))?$/);
  if (match) {
    const id = Number(match[1]);
    const tab = (match[2] as LessonTab | undefined) ?? 'notlar';
    if (lessons.some((l) => l.id === id)) {
      return { view: 'lesson', lessonId: id, tab };
    }
  }
  return { view: 'home' };
}

function toHash(route: RouteState): string {
  if (route.view === 'home') return '#/';
  if (route.view === 'search') return '#/arama';
  if (route.view === 'mixed-quiz') return '#/karma-sinav';
  if (route.view === 'mixed-cards') return '#/karma-kartlar';
  return `#/ders/${route.lessonId}/${route.tab}`;
}

export function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHash());
  const {
    progress,
    settings,
    toggleSectionDone,
    markCardStatus,
    recordQuizResult,
    toggleTheme,
    cycleFontSize,
    resetAllProgress,
  } = useStudyProgress();

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (next: RouteState, focusSectionId?: string) => {
    const nextHash = toHash(next);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(next);

    if (focusSectionId) {
      setTimeout(() => {
        const el = document.getElementById(`sec-${focusSectionId}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeLesson =
    route.view === 'lesson' ? lessons.find((l) => l.id === route.lessonId) : undefined;

  const headerTitle =
    route.view === 'home'
      ? 'İnkılâp Tarihi Çalışma Platformu'
      : route.view === 'search'
        ? 'Tüm Derslerde Ara'
        : route.view === 'mixed-quiz'
          ? 'Genel Karma Test Sınavı'
          : route.view === 'mixed-cards'
            ? 'Karma Öğrenme Kartları'
            : activeLesson
              ? `${activeLesson.id}. Ders · ${activeLesson.shortTitle}`
              : 'ATA 121';

  return (
    <div className="app-shell">
      <Header
        title={headerTitle}
        showBack={route.view !== 'home'}
        onBack={() => navigate({ view: 'home' })}
        onOpenSearch={() => navigate({ view: 'search' })}
        settings={settings}
        onToggleTheme={toggleTheme}
        onCycleFontSize={cycleFontSize}
      />

      <main className="main-content">
        {route.view === 'home' && (
          <Dashboard
            lessons={lessons}
            progress={progress}
            onOpenLesson={(lessonId, tab) => navigate({ view: 'lesson', lessonId, tab })}
            onOpenMixedQuiz={() => navigate({ view: 'mixed-quiz' })}
            onOpenMixedCards={() => navigate({ view: 'mixed-cards' })}
            onResetProgress={resetAllProgress}
          />
        )}

        {route.view === 'search' && (
          <GlobalSearch
            lessons={lessons}
            onNavigateLesson={(lessonId, tab, sectionId) =>
              navigate({ view: 'lesson', lessonId, tab }, sectionId)
            }
          />
        )}

        {route.view === 'mixed-quiz' && (
          <MixedHub
            mode="quiz"
            lessons={lessons}
            progress={progress}
            onMarkCard={markCardStatus}
            onRecordQuizResult={recordQuizResult}
          />
        )}

        {route.view === 'mixed-cards' && (
          <MixedHub
            mode="flashcards"
            lessons={lessons}
            progress={progress}
            onMarkCard={markCardStatus}
            onRecordQuizResult={recordQuizResult}
          />
        )}

        {route.view === 'lesson' && activeLesson && (
          <LessonView
            key={activeLesson.id}
            lesson={activeLesson}
            activeTab={route.tab}
            onChangeTab={(tab) =>
              navigate({ view: 'lesson', lessonId: activeLesson.id, tab })
            }
            progress={progress}
            onToggleSectionDone={toggleSectionDone}
            onMarkCard={markCardStatus}
            onRecordQuizResult={recordQuizResult}
          />
        )}
      </main>

      <footer className="footer-note">
        ATA 121 · Atatürk İlkeleri ve İnkılâp Tarihi · 7 Ders / 309 Slayt · İlerleme bu cihazda
        saklanır.
      </footer>
    </div>
  );
}

export default App;
