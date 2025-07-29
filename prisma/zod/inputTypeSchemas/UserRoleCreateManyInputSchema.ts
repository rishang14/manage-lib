import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  libraryId: z.string(),
  role: z.lazy(() => RoleTypeSchema)
}).strict();

export default UserRoleCreateManyInputSchema;
