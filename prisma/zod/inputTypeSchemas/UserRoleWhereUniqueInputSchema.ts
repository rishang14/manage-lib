import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUserIdLibraryIdCompoundUniqueInputSchema } from './UserRoleUserIdLibraryIdCompoundUniqueInputSchema';
import { UserRoleWhereInputSchema } from './UserRoleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleTypeFilterSchema } from './EnumRoleTypeFilterSchema';
import { RoleTypeSchema } from './RoleTypeSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { LibraryScalarRelationFilterSchema } from './LibraryScalarRelationFilterSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const UserRoleWhereUniqueInputSchema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userId_libraryId: z.lazy(() => UserRoleUserIdLibraryIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userId_libraryId: z.lazy(() => UserRoleUserIdLibraryIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userId_libraryId: z.lazy(() => UserRoleUserIdLibraryIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleTypeFilterSchema),z.lazy(() => RoleTypeSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
}).strict());

export default UserRoleWhereUniqueInputSchema;
