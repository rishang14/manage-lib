import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryScalarRelationFilterSchema: z.ZodType<Prisma.LibraryScalarRelationFilter> = z.object({
  is: z.lazy(() => LibraryWhereInputSchema).optional(),
  isNot: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryScalarRelationFilterSchema;
