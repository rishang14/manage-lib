import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleWhereInputSchema } from '../inputTypeSchemas/UserRoleWhereInputSchema'
import { UserRoleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserRoleOrderByWithAggregationInputSchema'
import { UserRoleScalarFieldEnumSchema } from '../inputTypeSchemas/UserRoleScalarFieldEnumSchema'
import { UserRoleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserRoleScalarWhereWithAggregatesInputSchema'

export const UserRoleGroupByArgsSchema: z.ZodType<Prisma.UserRoleGroupByArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithAggregationInputSchema.array(),UserRoleOrderByWithAggregationInputSchema ]).optional(),
  by: UserRoleScalarFieldEnumSchema.array(),
  having: UserRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserRoleGroupByArgsSchema;
