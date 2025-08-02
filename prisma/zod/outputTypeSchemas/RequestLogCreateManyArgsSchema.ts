import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogCreateManyInputSchema } from '../inputTypeSchemas/RequestLogCreateManyInputSchema'

export const RequestLogCreateManyArgsSchema: z.ZodType<Prisma.RequestLogCreateManyArgs> = z.object({
  data: z.union([ RequestLogCreateManyInputSchema,RequestLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RequestLogCreateManyArgsSchema;
