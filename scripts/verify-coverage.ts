import { lessons } from '../src/data/lessons/index.ts';

const EXPECTED_COUNTS: Record<number, number> = {
  1: 49,
  2: 47,
  3: 43,
  4: 38,
  5: 34,
  6: 38,
  7: 60,
};

let hasError = false;
let totalSlidesAll = 0;
let totalBulletsAll = 0;
let totalCardsAll = 0;
let totalQuestionsAll = 0;

const seenIds = new Set<string>();

for (const lesson of lessons) {
  const expected = EXPECTED_COUNTS[lesson.id];
  if (lesson.totalSlides !== expected) {
    console.error(`ERROR Lesson ${lesson.id}: totalSlides=${lesson.totalSlides}, expected=${expected}`);
    hasError = true;
  }

  const covered = new Set<number>();
  let bulletCount = 0;
  for (const sec of lesson.sections) {
    if (seenIds.has(sec.id)) {
      console.error(`ERROR Duplicate section id: ${sec.id}`);
      hasError = true;
    }
    seenIds.add(sec.id);

    for (const s of sec.slides) {
      if (s < 1 || s > lesson.totalSlides) {
        console.error(`ERROR Lesson ${lesson.id} section ${sec.id}: out-of-range slide ${s}`);
        hasError = true;
      }
      covered.add(s);
    }
    for (const b of sec.bullets) {
      bulletCount++;
      if (b.slides) {
        for (const s of b.slides) {
          if (s < 1 || s > lesson.totalSlides) {
            console.error(`ERROR Lesson ${lesson.id} bullet slide ${s} out of range`);
            hasError = true;
          }
          covered.add(s);
        }
      }
    }
  }

  const missing: number[] = [];
  for (let i = 1; i <= lesson.totalSlides; i++) {
    if (!covered.has(i)) missing.push(i);
  }
  if (missing.length > 0) {
    console.error(`ERROR Lesson ${lesson.id}: missing slides: ${missing.join(', ')}`);
    hasError = true;
  }

  for (const card of lesson.flashcards) {
    if (seenIds.has(card.id)) {
      console.error(`ERROR Duplicate card id: ${card.id}`);
      hasError = true;
    }
    seenIds.add(card.id);
    if (card.slide < 1 || card.slide > lesson.totalSlides) {
      console.error(`ERROR Card ${card.id}: slide ${card.slide} out of range`);
      hasError = true;
    }
  }

  for (const q of lesson.questions) {
    if (seenIds.has(q.id)) {
      console.error(`ERROR Duplicate question id: ${q.id}`);
      hasError = true;
    }
    seenIds.add(q.id);
    if (q.options.length !== 5) {
      console.error(`ERROR Question ${q.id}: must have 5 options, got ${q.options.length}`);
      hasError = true;
    }
    if (q.correctIndex < 0 || q.correctIndex > 4) {
      console.error(`ERROR Question ${q.id}: invalid correctIndex ${q.correctIndex}`);
      hasError = true;
    }
    if (q.slide < 1 || q.slide > lesson.totalSlides) {
      console.error(`ERROR Question ${q.id}: slide ${q.slide} out of range`);
      hasError = true;
    }
  }

  totalSlidesAll += covered.size;
  totalBulletsAll += bulletCount;
  totalCardsAll += lesson.flashcards.length;
  totalQuestionsAll += lesson.questions.length;

  console.log(
    `Ders ${lesson.id}: ${covered.size}/${lesson.totalSlides} slayt | ${lesson.sections.length} bölüm | ${bulletCount} madde | ${lesson.flashcards.length} kart | ${lesson.questions.length} test sorusu`
  );
}

console.log('---');
console.log(
  `TOPLAM: ${lessons.length} ders | ${totalSlidesAll}/309 slayt | ${totalBulletsAll} madde | ${totalCardsAll} kart | ${totalQuestionsAll} test sorusu`
);

if (hasError || totalSlidesAll !== 309) {
  process.exit(1);
}
