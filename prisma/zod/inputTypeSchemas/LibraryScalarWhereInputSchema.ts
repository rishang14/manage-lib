import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LibraryScalarWhereInputSchema: z.ZodType<Prisma.LibraryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LibraryScalarWhereInputSchema),z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryScalarWhereInputSchema),z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LibraryScalarWhereInputSchema;
