import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogCreateInputSchema } from '../inputTypeSchemas/RequestLogCreateInputSchema'
import { RequestLogUncheckedCreateInputSchema } from '../inputTypeSchemas/RequestLogUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RequestLogCreateArgsSchema: z.ZodType<Prisma.RequestLogCreateArgs> = z.object({
  select: RequestLogSelectSchema.optional(),
  data: z.union([ RequestLogCreateInputSchema,RequestLogUncheckedCreateInputSchema ]),
}).strict() ;

export default RequestLogCreateArgsSchema;
