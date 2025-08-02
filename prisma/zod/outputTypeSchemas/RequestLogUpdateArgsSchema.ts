import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogUpdateInputSchema } from '../inputTypeSchemas/RequestLogUpdateInputSchema'
import { RequestLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/RequestLogUncheckedUpdateInputSchema'
import { RequestLogWhereUniqueInputSchema } from '../inputTypeSchemas/RequestLogWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RequestLogUpdateArgsSchema: z.ZodType<Prisma.RequestLogUpdateArgs> = z.object({
  select: RequestLogSelectSchema.optional(),
  data: z.union([ RequestLogUpdateInputSchema,RequestLogUncheckedUpdateInputSchema ]),
  where: RequestLogWhereUniqueInputSchema,
}).strict() ;

export default RequestLogUpdateArgsSchema;
