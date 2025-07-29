import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { UserRoleOrderByRelationAggregateInputSchema } from './UserRoleOrderByRelationAggregateInputSchema';
import { SeatOrderByRelationAggregateInputSchema } from './SeatOrderByRelationAggregateInputSchema';
import { MemberOrderByRelationAggregateInputSchema } from './MemberOrderByRelationAggregateInputSchema';
import { ShiftOrderByRelationAggregateInputSchema } from './ShiftOrderByRelationAggregateInputSchema';

export const LibraryOrderByWithRelationInputSchema: z.ZodType<Prisma.LibraryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
  seats: z.lazy(() => SeatOrderByRelationAggregateInputSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputSchema).optional(),
  shifts: z.lazy(() => ShiftOrderByRelationAggregateInputSchema).optional()
}).strict();

export default LibraryOrderByWithRelationInputSchema;
