import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleSelectSchema } from '../inputTypeSchemas/UserRoleSelectSchema';
import { UserRoleIncludeSchema } from '../inputTypeSchemas/UserRoleIncludeSchema';

export const UserRoleArgsSchema: z.ZodType<Prisma.UserRoleDefaultArgs> = z.object({
  select: z.lazy(() => UserRoleSelectSchema).optional(),
  include: z.lazy(() => UserRoleIncludeSchema).optional(),
}).strict();

export default UserRoleArgsSchema;
