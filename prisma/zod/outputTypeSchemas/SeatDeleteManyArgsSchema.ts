import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatWhereInputSchema } from '../inputTypeSchemas/SeatWhereInputSchema'

export const SeatDeleteManyArgsSchema: z.ZodType<Prisma.SeatDeleteManyArgs> = z.object({
  where: SeatWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SeatDeleteManyArgsSchema;
