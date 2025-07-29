import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { UserCreateNestedOneWithoutUserRolesInputSchema } from './UserCreateNestedOneWithoutUserRolesInputSchema';
import { LibraryCreateNestedOneWithoutUserRolesInputSchema } from './LibraryCreateNestedOneWithoutUserRolesInputSchema';

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleTypeSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema),
  library: z.lazy(() => LibraryCreateNestedOneWithoutUserRolesInputSchema)
}).strict();

export default UserRoleCreateInputSchema;
