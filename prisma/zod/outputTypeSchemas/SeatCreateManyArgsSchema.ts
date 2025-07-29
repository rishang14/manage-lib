import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatCreateManyInputSchema } from '../inputTypeSchemas/SeatCreateManyInputSchema'

export const SeatCreateManyArgsSchema: z.ZodType<Prisma.SeatCreateManyArgs> = z.object({
  data: z.union([ SeatCreateManyInputSchema,SeatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SeatCreateManyArgsSchema;
