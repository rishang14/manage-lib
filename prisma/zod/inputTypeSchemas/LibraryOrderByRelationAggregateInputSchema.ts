import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LibraryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LibraryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LibraryOrderByRelationAggregateInputSchema;
