import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ShiftScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ShiftScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema),z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema),z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ShiftScalarWhereWithAggregatesInputSchema;
