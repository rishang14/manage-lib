import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SeatOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SeatOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SeatOrderByRelationAggregateInputSchema;
