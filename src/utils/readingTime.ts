export function calculateReadingTime(content: (string | { type: 'code'; content: string })[]): string {
  // Ortalama okuma hızı (kelime/dakika)
  const WORDS_PER_MINUTE = 200;
  // Kod bloklarını okuma hızı (kelime/dakika)
  const CODE_READING_SPEED = 100;

  let totalWords = 0;
  let codeWords = 0;

  content.forEach(section => {
    if (typeof section === 'string') {
      // Normal metin için kelime sayısı
      totalWords += section.trim().split(/\s+/).length;
    } else if (section.type === 'code') {
      // Kod bloğu için kelime sayısı
      codeWords += section.content.trim().split(/\s+/).length;
    }
  });

  // Normal metin ve kod okuma sürelerini hesapla
  const textMinutes = totalWords / WORDS_PER_MINUTE;
  const codeMinutes = codeWords / CODE_READING_SPEED;
  
  // Toplam süreyi yuvarla
  const totalMinutes = Math.ceil(textMinutes + codeMinutes);

  return `${totalMinutes} dk okuma`;
}