import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftWhereInputSchema } from '../inputTypeSchemas/ShiftWhereInputSchema'

export const ShiftDeleteManyArgsSchema: z.ZodType<Prisma.ShiftDeleteManyArgs> = z.object({
  where: ShiftWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ShiftDeleteManyArgsSchema;
