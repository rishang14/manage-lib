import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserRoleCreateManyLibraryInputSchema: z.ZodType<Prisma.UserRoleCreateManyLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  role: z.lazy(() => RoleTypeSchema)
}).strict();

export default UserRoleCreateManyLibraryInputSchema;
