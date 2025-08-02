import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereInputSchema } from '../inputTypeSchemas/RequestLogWhereInputSchema'
import { RequestLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/RequestLogOrderByWithRelationInputSchema'
import { RequestLogWhereUniqueInputSchema } from '../inputTypeSchemas/RequestLogWhereUniqueInputSchema'

export const RequestLogAggregateArgsSchema: z.ZodType<Prisma.RequestLogAggregateArgs> = z.object({
  where: RequestLogWhereInputSchema.optional(),
  orderBy: z.union([ RequestLogOrderByWithRelationInputSchema.array(),RequestLogOrderByWithRelationInputSchema ]).optional(),
  cursor: RequestLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RequestLogAggregateArgsSchema;
