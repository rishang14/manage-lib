import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleTypeSchema } from './RoleTypeSchema';
import { EnumRoleTypeFieldUpdateOperationsInputSchema } from './EnumRoleTypeFieldUpdateOperationsInputSchema';

export const UserRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.UserRoleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleTypeSchema),z.lazy(() => EnumRoleTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default UserRoleUpdateManyMutationInputSchema;
