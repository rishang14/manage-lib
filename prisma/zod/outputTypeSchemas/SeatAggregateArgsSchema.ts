import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatWhereInputSchema } from '../inputTypeSchemas/SeatWhereInputSchema'
import { SeatOrderByWithRelationInputSchema } from '../inputTypeSchemas/SeatOrderByWithRelationInputSchema'
import { SeatWhereUniqueInputSchema } from '../inputTypeSchemas/SeatWhereUniqueInputSchema'

export const SeatAggregateArgsSchema: z.ZodType<Prisma.SeatAggregateArgs> = z.object({
  where: SeatWhereInputSchema.optional(),
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(),SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SeatAggregateArgsSchema;
