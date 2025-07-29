import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleWhereInputSchema } from '../inputTypeSchemas/UserRoleWhereInputSchema'
import { UserRoleOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserRoleOrderByWithRelationInputSchema'
import { UserRoleWhereUniqueInputSchema } from '../inputTypeSchemas/UserRoleWhereUniqueInputSchema'

export const UserRoleAggregateArgsSchema: z.ZodType<Prisma.UserRoleAggregateArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserRoleAggregateArgsSchema;
