import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserRoleCountOrderByAggregateInputSchema } from './UserRoleCountOrderByAggregateInputSchema';
import { UserRoleMaxOrderByAggregateInputSchema } from './UserRoleMaxOrderByAggregateInputSchema';
import { UserRoleMinOrderByAggregateInputSchema } from './UserRoleMinOrderByAggregateInputSchema';

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserRoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserRoleMinOrderByAggregateInputSchema).optional()
}).strict();

export default UserRoleOrderByWithAggregationInputSchema;
