import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import { Flashcard, FlashcardCategory } from '../types/study';

export interface TaggedFlashcard extends Flashcard {
  lessonTitle?: string;
}

interface FlashcardDeckProps {
  cards: TaggedFlashcard[];
  knownCards: Record<string, boolean>;
  reviewCards: Record<string, boolean>;
  onMarkCard: (cardId: string, status: 'known' | 'review') => void;
}

type StatusFilter = 'all' | 'unseen' | 'review' | 'known';

const CATEGORIES: Array<FlashcardCategory | 'Tümü'> = [
  'Tümü',
  'Kavram',
  'Tarih / Olay',
  'Kişi / Eser',
  'Antlaşma / Kurum',
  'Karşılaştırma / Özellik',
];

function shuffleList<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function FlashcardDeck({
  cards,
  knownCards,
  reviewCards,
  onMarkCard,
}: FlashcardDeckProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<FlashcardCategory | 'Tümü'>('Tümü');
  const [shuffled, setShuffled] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filteredCards = useMemo(() => {
    const list = cards.filter((c) => {
      if (categoryFilter !== 'Tümü' && c.category !== categoryFilter) return false;
      if (statusFilter === 'known') return !!knownCards[c.id];
      if (statusFilter === 'review') return !!reviewCards[c.id];
      if (statusFilter === 'unseen') return !knownCards[c.id] && !reviewCards[c.id];
      return true;
    });
    return shuffled ? shuffleList(list) : list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, statusFilter, categoryFilter, shuffled, shuffleSeed]);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [statusFilter, categoryFilter, shuffled, shuffleSeed, cards]);

  const current = filteredCards[index];

  const goNext = () => {
    setFlipped(false);
    setIndex((i) => (i + 1 < filteredCards.length ? i + 1 : 0));
  };

  const goPrev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 >= 0 ? i - 1 : Math.max(0, filteredCards.length - 1)));
  };

  const handleGrade = (status: 'known' | 'review') => {
    if (!current) return;
    onMarkCard(current.id, status);
    goNext();
  };

  const knownCount = cards.filter((c) => knownCards[c.id]).length;
  const reviewCount = cards.filter((c) => reviewCards[c.id]).length;

  return (
    <div>
      <div className="card" style={{ padding: 14, marginBottom: 14 }}>
        <div className="controls-bar" style={{ marginBottom: 10 }}>
          <div className="filter-pills">
            <button
              type="button"
              className={`chip ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              Tümü ({cards.length})
            </button>
            <button
              type="button"
              className={`chip ${statusFilter === 'unseen' ? 'active' : ''}`}
              onClick={() => setStatusFilter('unseen')}
            >
              Yeni ({cards.length - knownCount - reviewCount})
            </button>
            <button
              type="button"
              className={`chip ${statusFilter === 'review' ? 'active' : ''}`}
              onClick={() => setStatusFilter('review')}
            >
              Tekrar Et ({reviewCount})
            </button>
            <button
              type="button"
              className={`chip ${statusFilter === 'known' ? 'active' : ''}`}
              onClick={() => setStatusFilter('known')}
            >
              Biliyorum ({knownCount})
            </button>
          </div>

          <button
            type="button"
            className={`chip ${shuffled ? 'active' : ''}`}
            onClick={() => {
              setShuffled((s) => !s);
              setShuffleSeed((n) => n + 1);
            }}
          >
            <Shuffle size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            Karıştır
          </button>
        </div>

        <div className="filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`chip ${categoryFilter === cat ? 'active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {!current ? (
        <div className="card empty-state">
          <p>Seçili filtrede kart bulunamadı.</p>
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              setStatusFilter('all');
              setCategoryFilter('Tümü');
            }}
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div>
          <div className="controls-bar" style={{ marginBottom: 6 }}>
            <span className="pill">
              Kart {index + 1} / {filteredCards.length}
            </span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {knownCards[current.id] && <span className="pill success">Biliniyor</span>}
              {reviewCards[current.id] && <span className="pill primary">Tekrar Listesinde</span>}
            </div>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((index + 1) / filteredCards.length) * 100}%` }}
            />
          </div>

          <div className="flashcard-stage">
            <div
              role="button"
              tabIndex={0}
              className={`flashcard-inner ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  setFlipped((f) => !f);
                } else if (e.key === 'ArrowRight') {
                  goNext();
                } else if (e.key === 'ArrowLeft') {
                  goPrev();
                }
              }}
              aria-label="Öğrenme kartını çevir"
            >
              <div className="flashcard-face front">
                <div className="flashcard-face-head">
                  <span className="pill primary">{current.category}</span>
                  <span className="pill">
                    {current.lessonTitle ? `${current.lessonTitle} · ` : ''}Slayt {current.slide}
                  </span>
                </div>
                <div className="flashcard-body">{current.front}</div>
                <div className="flashcard-hint">Cevabı görmek için karta dokun</div>
              </div>

              <div className="flashcard-face back">
                <div className="flashcard-face-head">
                  <span className="pill success">Cevap</span>
                  <span className="pill">Slayt {current.slide}</span>
                </div>
                <div className="flashcard-body">{current.back}</div>
                <div className="flashcard-hint">Ön yüze dönmek için tekrar dokun</div>
              </div>
            </div>
          </div>

          <div className="flashcard-nav">
            <button type="button" className="btn outline" onClick={goPrev}>
              <ChevronLeft size={18} /> Önceki
            </button>
            <button type="button" className="btn outline" onClick={goNext}>
              Sonraki <ChevronRight size={18} />
            </button>
          </div>

          <div className="flashcard-grade">
            <button
              type="button"
              className="btn outline"
              onClick={() => handleGrade('review')}
            >
              <RotateCcw size={16} /> Tekrar Et
            </button>
            <button
              type="button"
              className="btn success"
              onClick={() => handleGrade('known')}
            >
              <Check size={16} /> Biliyorum
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
