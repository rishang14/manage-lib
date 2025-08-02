import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereInputSchema } from '../inputTypeSchemas/RequestLogWhereInputSchema'
import { RequestLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/RequestLogOrderByWithRelationInputSchema'
import { RequestLogWhereUniqueInputSchema } from '../inputTypeSchemas/RequestLogWhereUniqueInputSchema'
import { RequestLogScalarFieldEnumSchema } from '../inputTypeSchemas/RequestLogScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RequestLogFindManyArgsSchema: z.ZodType<Prisma.RequestLogFindManyArgs> = z.object({
  select: RequestLogSelectSchema.optional(),
  where: RequestLogWhereInputSchema.optional(),
  orderBy: z.union([ RequestLogOrderByWithRelationInputSchema.array(),RequestLogOrderByWithRelationInputSchema ]).optional(),
  cursor: RequestLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RequestLogScalarFieldEnumSchema,RequestLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RequestLogFindManyArgsSchema;
