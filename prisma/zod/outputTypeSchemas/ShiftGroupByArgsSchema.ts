import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftWhereInputSchema } from '../inputTypeSchemas/ShiftWhereInputSchema'
import { ShiftOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ShiftOrderByWithAggregationInputSchema'
import { ShiftScalarFieldEnumSchema } from '../inputTypeSchemas/ShiftScalarFieldEnumSchema'
import { ShiftScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ShiftScalarWhereWithAggregatesInputSchema'

export const ShiftGroupByArgsSchema: z.ZodType<Prisma.ShiftGroupByArgs> = z.object({
  where: ShiftWhereInputSchema.optional(),
  orderBy: z.union([ ShiftOrderByWithAggregationInputSchema.array(),ShiftOrderByWithAggregationInputSchema ]).optional(),
  by: ShiftScalarFieldEnumSchema.array(),
  having: ShiftScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ShiftGroupByArgsSchema;
