import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereUniqueInputSchema } from '../inputTypeSchemas/RequestLogWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RequestLogFindUniqueArgsSchema: z.ZodType<Prisma.RequestLogFindUniqueArgs> = z.object({
  select: RequestLogSelectSchema.optional(),
  where: RequestLogWhereUniqueInputSchema,
}).strict() ;

export default RequestLogFindUniqueArgsSchema;
