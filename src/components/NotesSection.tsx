import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  GitCompare,
  Info,
  Quote,
} from 'lucide-react';
import { LessonData, NoteCallout } from '../types/study';
import { formatSlideRange } from '../utils/slides';

interface NotesSectionProps {
  lesson: LessonData;
  completedSections: Record<string, boolean>;
  onToggleSectionDone: (sectionId: string) => void;
  onGoToFlashcards: () => void;
  focusSectionId?: string;
}

function CalloutIcon({ type }: { type: NoteCallout['type'] }) {
  if (type === 'quote') return <Quote size={16} />;
  if (type === 'warning') return <AlertTriangle size={16} />;
  if (type === 'compare') return <GitCompare size={16} />;
  return <Info size={16} />;
}

export function NotesSection({
  lesson,
  completedSections,
  onToggleSectionDone,
  onGoToFlashcards,
}: NotesSectionProps) {
  const [onlyUnread, setOnlyUnread] = useState(false);

  const indexedSections = lesson.sections.map((section, idx) => ({
    section,
    num: idx + 1,
  }));

  const visibleSections = onlyUnread
    ? indexedSections.filter(({ section }) => !completedSections[section.id])
    : indexedSections;

  const doneCount = lesson.sections.filter((s) => completedSections[s.id]).length;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`sec-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="card toc-panel">
        <div className="toc-header">
          <span className="pill primary">
            <BookOpen size={14} />
            {doneCount}/{lesson.sections.length} Bölüm Tamamlandı
          </span>
          <button
            type="button"
            className={`chip ${onlyUnread ? 'active' : ''}`}
            onClick={() => setOnlyUnread((v) => !v)}
          >
            {onlyUnread ? 'Tüm Bölümleri Göster' : 'Sadece Okunmayanlar'}
          </button>
        </div>

        <div className="toc-pills">
          {lesson.sections.map((sec, idx) => {
            const done = !!completedSections[sec.id];
            return (
              <button
                key={sec.id}
                type="button"
                className={`toc-pill ${done ? 'done' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                {idx + 1}. {sec.title}
              </button>
            );
          })}
        </div>
      </div>

      {visibleSections.length === 0 ? (
        <div className="card empty-state">
          <p>Bu dersteki tüm bölümleri tamamladın!</p>
          <button type="button" className="btn primary" onClick={() => setOnlyUnread(false)}>
            Tüm Notları Tekrar Göster
          </button>
        </div>
      ) : (
        visibleSections.map(({ section, num }) => {
          const isDone = !!completedSections[section.id];
          return (
            <article key={section.id} id={`sec-${section.id}`} className="card note-section-card">
              <div className="note-section-head">
                <div>
                  <h2 className="note-section-title">
                    {num}. {section.title}
                  </h2>
                  <div className="lesson-meta">
                    <span className="pill">{formatSlideRange(section.slides)}</span>
                    <span className="pill">{section.bullets.length} madde</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={`btn ${isDone ? 'success' : 'outline'}`}
                  onClick={() => onToggleSectionDone(section.id)}
                >
                  {isDone ? <CheckCircle2 size={17} /> : <Circle size={17} />}
                  {isDone ? 'Tamamlandı' : 'Okundu İşaretle'}
                </button>
              </div>

              {section.summary && <p className="note-summary">{section.summary}</p>}

              <ul className="bullet-list">
                {section.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="bullet-item">
                    {b.highlight && <span className="bullet-highlight">{b.highlight}:</span>}
                    <span>{b.text}</span>
                    {b.slides && b.slides.length > 0 && (
                      <span className="slide-tag">s.{b.slides.join(',')}</span>
                    )}
                    {b.subBullets && b.subBullets.length > 0 && (
                      <ul className="sub-bullet-list">
                        {b.subBullets.map((sb, sbIdx) => (
                          <li key={sbIdx}>{sb}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {section.tables?.map((tbl, tIdx) => (
                <div key={tIdx} className="table-scroll">
                  <table className="note-table">
                    {tbl.caption && <caption>{tbl.caption}</caption>}
                    <thead>
                      <tr>
                        {tbl.headers.map((h, hIdx) => (
                          <th key={hIdx}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              {section.callouts?.map((co, cIdx) => (
                <div key={cIdx} className={`callout ${co.type}`}>
                  <div className="callout-title">
                    <CalloutIcon type={co.type} />
                    <span>{co.title}</span>
                    {co.slides && co.slides.length > 0 && (
                      <span className="slide-tag">s.{co.slides.join(',')}</span>
                    )}
                  </div>
                  <div>{co.content}</div>
                </div>
              ))}
            </article>
          );
        })
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
        <button type="button" className="btn primary" onClick={onGoToFlashcards}>
          Öğrenme Kartlarına Geç <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
