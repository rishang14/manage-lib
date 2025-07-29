import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryListRelationFilterSchema: z.ZodType<Prisma.LibraryListRelationFilter> = z.object({
  every: z.lazy(() => LibraryWhereInputSchema).optional(),
  some: z.lazy(() => LibraryWhereInputSchema).optional(),
  none: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryListRelationFilterSchema;
