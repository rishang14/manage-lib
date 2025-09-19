import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { UserCreateNestedOneWithoutUserRolesInputSchema } from './UserCreateNestedOneWithoutUserRolesInputSchema';

export const UserRoleCreateWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleTypeSchema),
  joinedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema)
}).strict();

export default UserRoleCreateWithoutLibraryInputSchema;
