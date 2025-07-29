import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleCreateManyInputSchema } from '../inputTypeSchemas/UserRoleCreateManyInputSchema'

export const UserRoleCreateManyArgsSchema: z.ZodType<Prisma.UserRoleCreateManyArgs> = z.object({
  data: z.union([ UserRoleCreateManyInputSchema,UserRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserRoleCreateManyArgsSchema;
