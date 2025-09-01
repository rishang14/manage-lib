import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryNullableScalarRelationFilterSchema: z.ZodType<Prisma.LibraryNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => LibraryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LibraryWhereInputSchema).optional().nullable()
}).strict();

export default LibraryNullableScalarRelationFilterSchema;
