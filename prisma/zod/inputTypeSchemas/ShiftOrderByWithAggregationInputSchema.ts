import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ShiftCountOrderByAggregateInputSchema } from './ShiftCountOrderByAggregateInputSchema';
import { ShiftMaxOrderByAggregateInputSchema } from './ShiftMaxOrderByAggregateInputSchema';
import { ShiftMinOrderByAggregateInputSchema } from './ShiftMinOrderByAggregateInputSchema';

export const ShiftOrderByWithAggregationInputSchema: z.ZodType<Prisma.ShiftOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ShiftCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ShiftMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ShiftMinOrderByAggregateInputSchema).optional()
}).strict();

export default ShiftOrderByWithAggregationInputSchema;
