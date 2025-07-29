import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatUpdateManyMutationInputSchema } from '../inputTypeSchemas/SeatUpdateManyMutationInputSchema'
import { SeatUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SeatUncheckedUpdateManyInputSchema'
import { SeatWhereInputSchema } from '../inputTypeSchemas/SeatWhereInputSchema'

export const SeatUpdateManyArgsSchema: z.ZodType<Prisma.SeatUpdateManyArgs> = z.object({
  data: z.union([ SeatUpdateManyMutationInputSchema,SeatUncheckedUpdateManyInputSchema ]),
  where: SeatWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SeatUpdateManyArgsSchema;
