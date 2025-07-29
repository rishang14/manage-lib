import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const SeatScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SeatScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SeatScalarWhereWithAggregatesInputSchema),z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatScalarWhereWithAggregatesInputSchema),z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default SeatScalarWhereWithAggregatesInputSchema;
