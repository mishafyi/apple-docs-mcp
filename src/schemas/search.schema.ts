import { z } from 'zod';

export const searchAppleDocsSchema = z.object({
  query: z.string().describe('Search query for Apple Developer Documentation'),
  type: z.enum(['all', 'documentation', 'design', 'sample']).default('all')
    .describe('Type of content to search for (documentation=API reference, design=Human Interface Guidelines, sample=code samples)'),
});