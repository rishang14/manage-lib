import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestLogWhereInputSchema } from '../inputTypeSchemas/RequestLogWhereInputSchema'

export const RequestLogDeleteManyArgsSchema: z.ZodType<Prisma.RequestLogDeleteManyArgs> = z.object({
  where: RequestLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RequestLogDeleteManyArgsSchema;
