import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserRoleUpdateManyMutationInputSchema'
import { UserRoleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserRoleUncheckedUpdateManyInputSchema'
import { UserRoleWhereInputSchema } from '../inputTypeSchemas/UserRoleWhereInputSchema'

export const UserRoleUpdateManyArgsSchema: z.ZodType<Prisma.UserRoleUpdateManyArgs> = z.object({
  data: z.union([ UserRoleUpdateManyMutationInputSchema,UserRoleUncheckedUpdateManyInputSchema ]),
  where: UserRoleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserRoleUpdateManyArgsSchema;
