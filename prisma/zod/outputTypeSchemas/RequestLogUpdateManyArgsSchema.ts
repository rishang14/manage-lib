import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/RequestLogUpdateManyMutationInputSchema'
import { RequestLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RequestLogUncheckedUpdateManyInputSchema'
import { RequestLogWhereInputSchema } from '../inputTypeSchemas/RequestLogWhereInputSchema'

export const RequestLogUpdateManyArgsSchema: z.ZodType<Prisma.RequestLogUpdateManyArgs> = z.object({
  data: z.union([ RequestLogUpdateManyMutationInputSchema,RequestLogUncheckedUpdateManyInputSchema ]),
  where: RequestLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RequestLogUpdateManyArgsSchema;
