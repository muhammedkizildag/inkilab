import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Flag,
  RotateCcw,
  Shuffle,
  XCircle,
} from 'lucide-react';
import { QuizQuestion } from '../types/study';

export interface TaggedQuestion extends QuizQuestion {
  lessonTitle?: string;
}

interface QuizSectionProps {
  questions: TaggedQuestion[];
  lessonId: number | null;
  onRecordResult: (
    lessonId: number | null,
    correct: number,
    total: number,
    correctIds: string[]
  ) => void;
}

type QuizMode = 'practice' | 'exam';

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;

function shuffleArray<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function QuizSection({ questions, lessonId, onRecordResult }: QuizSectionProps) {
  const [mode, setMode] = useState<QuizMode>('practice');
  const [questionLimit, setQuestionLimit] = useState<number>(0);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [runSeed, setRunSeed] = useState(0);
  const [onlyWrongSubset, setOnlyWrongSubset] = useState<string[] | null>(null);
  const [showDots, setShowDots] = useState(true);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);

  useEffect(() => {
    setAnswers({});
    setExamSubmitted(false);
    setCurrentIdx(0);
    setOnlyWrongSubset(null);
    setShowDots(questions.length <= 30);
  }, [questions]);

  const activeQuestions = useMemo(() => {
    let base = questions;
    if (onlyWrongSubset && onlyWrongSubset.length > 0) {
      const set = new Set(onlyWrongSubset);
      base = questions.filter((q) => set.has(q.id));
    }
    const ordered = shuffleOn ? shuffleArray(base) : base;
    if (questionLimit > 0 && questionLimit < ordered.length) {
      return ordered.slice(0, questionLimit);
    }
    return ordered;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, onlyWrongSubset, shuffleOn, questionLimit, runSeed]);

  const resetRun = (
    nextMode: QuizMode = mode,
    nextLimit: number = questionLimit,
    nextWrong: string[] | null = null
  ) => {
    setMode(nextMode);
    setQuestionLimit(nextLimit);
    setOnlyWrongSubset(nextWrong);
    setAnswers({});
    setExamSubmitted(false);
    setCurrentIdx(0);
    setRunSeed((s) => s + 1);
  };

  const selectOption = (qId: string, optionIdx: number) => {
    if (mode === 'practice' && answers[qId] !== undefined) return;
    if (mode === 'exam' && examSubmitted) return;
    const next = { ...answers, [qId]: optionIdx };
    setAnswers(next);

    if (mode === 'practice') {
      const q = activeQuestions.find((item) => item.id === qId);
      if (q && optionIdx === q.correctIndex) {
        const correctIds = activeQuestions
          .filter((item) => next[item.id] === item.correctIndex)
          .map((item) => item.id);
        onRecordResult(lessonId, correctIds.length, activeQuestions.length, [qId]);
      }
    }
  };

  const finishExam = () => {
    const correctIds = activeQuestions
      .filter((q) => answers[q.id] === q.correctIndex)
      .map((q) => q.id);
    onRecordResult(lessonId, correctIds.length, activeQuestions.length, correctIds);
    setExamSubmitted(true);
    setCurrentIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const current = activeQuestions[currentIdx];

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    const wrongIds: string[] = [];
    for (const q of activeQuestions) {
      const a = answers[q.id];
      if (a === undefined) continue;
      if (a === q.correctIndex) correct++;
      else {
        wrong++;
        wrongIds.push(q.id);
      }
    }
    const empty = activeQuestions.length - correct - wrong;
    const score = activeQuestions.length
      ? Math.round((correct / activeQuestions.length) * 100)
      : 0;
    return { correct, wrong, empty, score, wrongIds };
  }, [activeQuestions, answers]);

  const showFeedbackForCurrent =
    current &&
    ((mode === 'practice' && answers[current.id] !== undefined) ||
      (mode === 'exam' && examSubmitted));

  const limitOptions = [0, 10, 20, 30, 50].filter(
    (lim) => lim === 0 || lim < questions.length
  );

  return (
    <div>
      <div className="card quiz-mode-bar">
        <div className="filter-pills">
          <button
            type="button"
            className={`chip ${mode === 'practice' ? 'active' : ''}`}
            onClick={() => resetRun('practice', questionLimit, null)}
          >
            Alıştırma Modu (Anında Çözüm)
          </button>
          <button
            type="button"
            className={`chip ${mode === 'exam' ? 'active' : ''}`}
            onClick={() => resetRun('exam', questionLimit, null)}
          >
            Sınav Modu (Test)
          </button>
        </div>

        <div className="filter-pills">
          {limitOptions.map((lim) => (
            <button
              key={lim}
              type="button"
              className={`chip ${questionLimit === lim ? 'active' : ''}`}
              onClick={() => resetRun(mode, lim, null)}
            >
              {lim === 0 ? `Tümü (${questions.length})` : `${lim} Soru`}
            </button>
          ))}
          <button
            type="button"
            className={`chip ${shuffleOn ? 'active' : ''}`}
            onClick={() => {
              setShuffleOn((v) => !v);
              resetRun(mode, questionLimit, onlyWrongSubset);
            }}
          >
            <Shuffle size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            Karıştır
          </button>
        </div>
      </div>

      {mode === 'exam' && examSubmitted && (
        <div className="card" style={{ padding: 18, marginBottom: 14 }}>
          <div className="hero-top">
            <div>
              <span className="pill primary">Sınav Sonucu</span>
              <h2 style={{ margin: '8px 0 4px' }}>Puan: {stats.score} / 100</h2>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {stats.correct} Doğru · {stats.wrong} Yanlış · {stats.empty} Boş (
                {activeQuestions.length} soru)
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {stats.wrongIds.length > 0 && (
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => resetRun('practice', 0, stats.wrongIds)}
                >
                  <RotateCcw size={15} /> Yanlışları Çöz ({stats.wrongIds.length})
                </button>
              )}
              <button
                type="button"
                className="btn outline"
                onClick={() => resetRun(mode, questionLimit, null)}
              >
                <RotateCcw size={15} /> Yeniden Başlat
              </button>
            </div>
          </div>
        </div>
      )}

      {!current ? (
        <div className="card empty-state">Bu filtrede soru bulunamadı.</div>
      ) : (
        <div>
          {activeQuestions.length > 30 && (
            <div style={{ marginBottom: 8 }}>
              <button
                type="button"
                className="chip"
                onClick={() => setShowDots((v) => !v)}
              >
                Soru Haritası ({activeQuestions.length} Soru){' '}
                {showDots ? (
                  <ChevronUp size={14} style={{ verticalAlign: 'middle' }} />
                ) : (
                  <ChevronDown size={14} style={{ verticalAlign: 'middle' }} />
                )}
              </button>
            </div>
          )}

          {showDots && (
            <div className="q-nav-dots">
              {activeQuestions.map((q, i) => {
                const a = answers[q.id];
                const isRevealed =
                  (mode === 'practice' && a !== undefined) || (mode === 'exam' && examSubmitted);
                let cls = 'q-dot';
                if (i === currentIdx) cls += ' current';
                if (isRevealed && a !== undefined) {
                  cls += a === q.correctIndex ? ' correct' : ' wrong';
                } else if (a !== undefined) {
                  cls += ' answered';
                }
                return (
                  <button
                    key={q.id}
                    type="button"
                    className={cls}
                    onClick={() => setCurrentIdx(i)}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          )}

          <div className="card question-card">
            <div className="controls-bar" style={{ marginBottom: 4 }}>
              <span className="pill primary">
                Soru {currentIdx + 1} / {activeQuestions.length}
              </span>
              <span className="pill">
                {current.lessonTitle ? `${current.lessonTitle} · ` : ''}Slayt {current.slide}
              </span>
            </div>

            <div className="question-text">{current.question}</div>

            <div className="options-list">
              {current.options.map((opt, oIdx) => {
                const selected = answers[current.id] === oIdx;
                const isCorrect = oIdx === current.correctIndex;
                let cls = 'option-btn';
                if (showFeedbackForCurrent) {
                  if (isCorrect) cls += ' correct';
                  else if (selected) cls += ' wrong';
                } else if (selected) {
                  cls += ' selected';
                }

                return (
                  <button
                    key={oIdx}
                    type="button"
                    className={cls}
                    disabled={
                      (mode === 'practice' && answers[current.id] !== undefined) ||
                      (mode === 'exam' && examSubmitted)
                    }
                    onClick={() => selectOption(current.id, oIdx)}
                  >
                    <span className="option-letter">{LETTERS[oIdx]}</span>
                    <span style={{ flex: 1 }}>{opt}</span>
                    {showFeedbackForCurrent && isCorrect && (
                      <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0 }} />
                    )}
                    {showFeedbackForCurrent && selected && !isCorrect && (
                      <XCircle size={18} color="var(--danger)" style={{ flexShrink: 0 }} />
                    )}
                  </button>
                );
              })}
            </div>

            {showFeedbackForCurrent && (
              <div className="explanation-box">
                <strong>Doğru Cevap: {LETTERS[current.correctIndex]} şıkkı</strong>
                <div style={{ marginTop: 4 }}>{current.explanation}</div>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: 10,
                marginTop: 18,
              }}
            >
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  className="btn outline"
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                >
                  <ChevronLeft size={17} /> Önceki
                </button>
                <button
                  type="button"
                  className="btn outline"
                  disabled={currentIdx === activeQuestions.length - 1}
                  onClick={() =>
                    setCurrentIdx((i) => Math.min(activeQuestions.length - 1, i + 1))
                  }
                >
                  Sonraki <ChevronRight size={17} />
                </button>
              </div>

              {mode === 'exam' && !examSubmitted && (
                <button type="button" className="btn primary" onClick={finishExam}>
                  <Flag size={16} /> Sınavı Bitir
                </button>
              )}

              {mode === 'practice' && stats.wrongIds.length > 0 && (
                <button
                  type="button"
                  className="btn outline"
                  onClick={() => resetRun('practice', 0, stats.wrongIds)}
                >
                  <RotateCcw size={15} /> Yanlışları Tekrarla ({stats.wrongIds.length})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
