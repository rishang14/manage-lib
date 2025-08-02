import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RequestLogCountOrderByAggregateInputSchema } from './RequestLogCountOrderByAggregateInputSchema';
import { RequestLogMaxOrderByAggregateInputSchema } from './RequestLogMaxOrderByAggregateInputSchema';
import { RequestLogMinOrderByAggregateInputSchema } from './RequestLogMinOrderByAggregateInputSchema';

export const RequestLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.RequestLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RequestLogCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RequestLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RequestLogMinOrderByAggregateInputSchema).optional()
}).strict();

export default RequestLogOrderByWithAggregationInputSchema;
