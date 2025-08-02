import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereUniqueInputSchema } from '../inputTypeSchemas/RequestLogWhereUniqueInputSchema'
import { RequestLogCreateInputSchema } from '../inputTypeSchemas/RequestLogCreateInputSchema'
import { RequestLogUncheckedCreateInputSchema } from '../inputTypeSchemas/RequestLogUncheckedCreateInputSchema'
import { RequestLogUpdateInputSchema } from '../inputTypeSchemas/RequestLogUpdateInputSchema'
import { RequestLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/RequestLogUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RequestLogUpsertArgsSchema: z.ZodType<Prisma.RequestLogUpsertArgs> = z.object({
  select: RequestLogSelectSchema.optional(),
  where: RequestLogWhereUniqueInputSchema,
  create: z.union([ RequestLogCreateInputSchema,RequestLogUncheckedCreateInputSchema ]),
  update: z.union([ RequestLogUpdateInputSchema,RequestLogUncheckedUpdateInputSchema ]),
}).strict() ;

export default RequestLogUpsertArgsSchema;
