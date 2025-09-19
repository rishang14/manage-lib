import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { LibraryCreateNestedOneWithoutUserRolesInputSchema } from './LibraryCreateNestedOneWithoutUserRolesInputSchema';

export const UserRoleCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleTypeSchema),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutUserRolesInputSchema)
}).strict();

export default UserRoleCreateWithoutUserInputSchema;
