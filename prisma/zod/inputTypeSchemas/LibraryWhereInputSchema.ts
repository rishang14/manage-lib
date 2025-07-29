import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserRoleListRelationFilterSchema } from './UserRoleListRelationFilterSchema';
import { SeatListRelationFilterSchema } from './SeatListRelationFilterSchema';
import { MemberListRelationFilterSchema } from './MemberListRelationFilterSchema';
import { ShiftListRelationFilterSchema } from './ShiftListRelationFilterSchema';

export const LibraryWhereInputSchema: z.ZodType<Prisma.LibraryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LibraryWhereInputSchema),z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryWhereInputSchema),z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  seats: z.lazy(() => SeatListRelationFilterSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  shifts: z.lazy(() => ShiftListRelationFilterSchema).optional()
}).strict();

export default LibraryWhereInputSchema;
