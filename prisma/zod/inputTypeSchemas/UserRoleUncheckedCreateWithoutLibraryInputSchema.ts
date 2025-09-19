import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserRoleUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  role: z.lazy(() => RoleTypeSchema),
  joinedAt: z.coerce.date().optional()
}).strict();

export default UserRoleUncheckedCreateWithoutLibraryInputSchema;
