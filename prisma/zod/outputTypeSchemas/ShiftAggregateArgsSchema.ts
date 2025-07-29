import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftWhereInputSchema } from '../inputTypeSchemas/ShiftWhereInputSchema'
import { ShiftOrderByWithRelationInputSchema } from '../inputTypeSchemas/ShiftOrderByWithRelationInputSchema'
import { ShiftWhereUniqueInputSchema } from '../inputTypeSchemas/ShiftWhereUniqueInputSchema'

export const ShiftAggregateArgsSchema: z.ZodType<Prisma.ShiftAggregateArgs> = z.object({
  where: ShiftWhereInputSchema.optional(),
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(),ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ShiftAggregateArgsSchema;
