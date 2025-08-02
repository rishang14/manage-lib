import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogCreateManyInputSchema } from '../inputTypeSchemas/RequestLogCreateManyInputSchema'

export const RequestLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RequestLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ RequestLogCreateManyInputSchema,RequestLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RequestLogCreateManyAndReturnArgsSchema;
