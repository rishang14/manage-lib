import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const SeatScalarWhereInputSchema: z.ZodType<Prisma.SeatScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SeatScalarWhereInputSchema),z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatScalarWhereInputSchema),z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default SeatScalarWhereInputSchema;
