import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LibraryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LibraryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema),z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema),z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LibraryScalarWhereWithAggregatesInputSchema;
