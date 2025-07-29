import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserRoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  libraryId: z.string(),
  role: z.lazy(() => RoleTypeSchema)
}).strict();

export default UserRoleUncheckedCreateWithoutUserInputSchema;
