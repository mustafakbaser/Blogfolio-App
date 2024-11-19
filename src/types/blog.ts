export interface ImageSection {
    type: 'image';
    url: string;
    alt: string;
    caption?: string;
  }
  
  export interface QuoteSection {
    type: 'quote';
    content: string;
    author?: string;
    source?: string;
  }
  
  export interface ListSection {
    type: 'list';
    items: string[];
    ordered: boolean;
  }
  
  export interface TableSection {
    type: 'table';
    headers: string[];
    rows: string[][];
    caption?: string;
  }
  
  export interface AlertSection {
    type: 'alert';
    content: string;
    variant: 'info' | 'warning' | 'success' | 'error';
  }
  
  export interface CodeSection {
    type: 'code';
    content: string;
    language: string;
  }
  
  export interface TextSection {
    type: 'text';
    content: string;
  }
  
  export interface HeadingSection {
    type: 'heading';
    content: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  }
  
  export interface LinkSection {
    type: 'link';
    content: string;
    url: string;
  }
  
  export interface DividerSection {
    type: 'divider';
  }
  
  export type ContentSection = 
    | TextSection 
    | CodeSection 
    | HeadingSection 
    | LinkSection 
    | DividerSection
    | ImageSection
    | QuoteSection
    | ListSection
    | TableSection
    | AlertSection;
  
  export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: ContentSection[];
    imageUrl: string;
    publishedAt: string;
    category: string;
    readTime: string;
  }