import { ContentSection } from '../types/blog';

export function calculateReadingTime(content: ContentSection[]): string {
  // Average reading speed (words/minute)
  const WORDS_PER_MINUTE = 200;
  // Speed ​​of reading code blocks (words/minute)
  const CODE_READING_SPEED = 100;
  // Speed ​​of reading list items (items/minute)
  const LIST_ITEMS_PER_MINUTE = 30;
  // Speed ​​of reading table cells (cells/minute)
  const TABLE_CELLS_PER_MINUTE = 20;

  let totalWords = 0;
  let codeWords = 0;
  let listItems = 0;
  let tableCells = 0;

  content.forEach(section => {
    switch (section.type) {
      case 'text':
      case 'heading':
      case 'link':
      case 'quote':
      case 'alert':
        totalWords += section.content.trim().split(/\s+/).length;
        break;
      case 'code':
        codeWords += section.content.trim().split(/\s+/).length;
        break;
      case 'list':
        listItems += section.items.length;
        totalWords += section.items.join(' ').trim().split(/\s+/).length;
        break;
      case 'table':
        tableCells += section.rows.reduce((acc, row) => acc + row.length, 0);
        break;
      case 'image':
        // 5 seconds per image
        totalWords += 15; // ~5 sec
        break;
    }
  });

  // Calculate normal text and code reading times
  const textMinutes = totalWords / WORDS_PER_MINUTE;
  const codeMinutes = codeWords / CODE_READING_SPEED;
  const listMinutes = listItems / LIST_ITEMS_PER_MINUTE;
  const tableMinutes = tableCells / TABLE_CELLS_PER_MINUTE;
  
  // Round the total time
  const totalMinutes = Math.ceil(textMinutes + codeMinutes + listMinutes + tableMinutes);

  // Return singular or plural form based on the total minutes
  return totalMinutes === 1 ? `${totalMinutes} min read` : `${totalMinutes} mins read`;
}