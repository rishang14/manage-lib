import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SeatCountOrderByAggregateInputSchema } from './SeatCountOrderByAggregateInputSchema';
import { SeatMaxOrderByAggregateInputSchema } from './SeatMaxOrderByAggregateInputSchema';
import { SeatMinOrderByAggregateInputSchema } from './SeatMinOrderByAggregateInputSchema';

export const SeatOrderByWithAggregationInputSchema: z.ZodType<Prisma.SeatOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SeatCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SeatMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SeatMinOrderByAggregateInputSchema).optional()
}).strict();

export default SeatOrderByWithAggregationInputSchema;
