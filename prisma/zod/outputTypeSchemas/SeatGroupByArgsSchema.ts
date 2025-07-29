import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatWhereInputSchema } from '../inputTypeSchemas/SeatWhereInputSchema'
import { SeatOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SeatOrderByWithAggregationInputSchema'
import { SeatScalarFieldEnumSchema } from '../inputTypeSchemas/SeatScalarFieldEnumSchema'
import { SeatScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SeatScalarWhereWithAggregatesInputSchema'

export const SeatGroupByArgsSchema: z.ZodType<Prisma.SeatGroupByArgs> = z.object({
  where: SeatWhereInputSchema.optional(),
  orderBy: z.union([ SeatOrderByWithAggregationInputSchema.array(),SeatOrderByWithAggregationInputSchema ]).optional(),
  by: SeatScalarFieldEnumSchema.array(),
  having: SeatScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SeatGroupByArgsSchema;
