import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserRoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  libraryId: z.string(),
  role: z.lazy(() => RoleTypeSchema),
  joinedAt: z.coerce.date().optional()
}).strict();

export default UserRoleUncheckedCreateWithoutUserInputSchema;
