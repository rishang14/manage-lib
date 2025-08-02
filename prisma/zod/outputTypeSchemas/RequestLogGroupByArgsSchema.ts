import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereInputSchema } from '../inputTypeSchemas/RequestLogWhereInputSchema'
import { RequestLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RequestLogOrderByWithAggregationInputSchema'
import { RequestLogScalarFieldEnumSchema } from '../inputTypeSchemas/RequestLogScalarFieldEnumSchema'
import { RequestLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RequestLogScalarWhereWithAggregatesInputSchema'

export const RequestLogGroupByArgsSchema: z.ZodType<Prisma.RequestLogGroupByArgs> = z.object({
  where: RequestLogWhereInputSchema.optional(),
  orderBy: z.union([ RequestLogOrderByWithAggregationInputSchema.array(),RequestLogOrderByWithAggregationInputSchema ]).optional(),
  by: RequestLogScalarFieldEnumSchema.array(),
  having: RequestLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RequestLogGroupByArgsSchema;
