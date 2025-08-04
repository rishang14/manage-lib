import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PaymentCountOrderByAggregateInputSchema } from './PaymentCountOrderByAggregateInputSchema';
import { PaymentAvgOrderByAggregateInputSchema } from './PaymentAvgOrderByAggregateInputSchema';
import { PaymentMaxOrderByAggregateInputSchema } from './PaymentMaxOrderByAggregateInputSchema';
import { PaymentMinOrderByAggregateInputSchema } from './PaymentMinOrderByAggregateInputSchema';
import { PaymentSumOrderByAggregateInputSchema } from './PaymentSumOrderByAggregateInputSchema';

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional()
}).strict();

export default PaymentOrderByWithAggregationInputSchema;
