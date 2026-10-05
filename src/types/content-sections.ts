/**
 * Content section types for Apple documentation
 */

export interface ContentSection {
  kind: string;
  content?: unknown[];
  declarations?: Array<{
    tokens?: Array<{ text?: string }>;
  }>;
  parameters?: Array<{
    name?: string;
    content?: Array<{
      inlineContent?: Array<{ text?: string }>;
    }>;
  }>;
}

/**
 * A run of inline content: text, code voice, a reference, a link, or emphasis around more inline content
 */
export interface InlineItem {
  type: string;
  text?: string;
  code?: string;
  identifier?: string;
  overridingTitle?: string;
  title?: string;
  inlineContent?: InlineItem[];
}

export interface ContentItem {
  type: string;
  text?: string;
  level?: number;
  inlineContent?: InlineItem[];
  items?: unknown[];
  code?: string[];
  syntax?: string;
  name?: string;
  content?: ContentItem[];
  tabs?: Array<{ title?: string; content?: ContentItem[] }>;
  columns?: Array<{ content?: ContentItem[] }>;
  header?: string;
  rows?: ContentItem[][][];
}

export interface ListItem {
  content?: Array<{
    inlineContent?: Array<{ text?: string }>;
  }>;
}