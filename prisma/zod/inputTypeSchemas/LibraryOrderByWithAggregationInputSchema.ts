import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LibraryCountOrderByAggregateInputSchema } from './LibraryCountOrderByAggregateInputSchema';
import { LibraryMaxOrderByAggregateInputSchema } from './LibraryMaxOrderByAggregateInputSchema';
import { LibraryMinOrderByAggregateInputSchema } from './LibraryMinOrderByAggregateInputSchema';

export const LibraryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LibraryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LibraryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LibraryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LibraryMinOrderByAggregateInputSchema).optional()
}).strict();

export default LibraryOrderByWithAggregationInputSchema;
