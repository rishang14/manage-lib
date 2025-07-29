import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SeatMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SeatMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SeatMaxOrderByAggregateInputSchema;
