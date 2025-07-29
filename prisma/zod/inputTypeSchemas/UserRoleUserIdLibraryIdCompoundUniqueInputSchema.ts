import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUserIdLibraryIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserRoleUserIdLibraryIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  libraryId: z.string()
}).strict();

export default UserRoleUserIdLibraryIdCompoundUniqueInputSchema;
