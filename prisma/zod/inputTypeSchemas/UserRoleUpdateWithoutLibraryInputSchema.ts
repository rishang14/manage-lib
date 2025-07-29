import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleTypeSchema } from './RoleTypeSchema';
import { EnumRoleTypeFieldUpdateOperationsInputSchema } from './EnumRoleTypeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutUserRolesNestedInputSchema } from './UserUpdateOneRequiredWithoutUserRolesNestedInputSchema';

export const UserRoleUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutLibraryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleTypeSchema),z.lazy(() => EnumRoleTypeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional()
}).strict();

export default UserRoleUpdateWithoutLibraryInputSchema;
