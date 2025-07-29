import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftUpdateManyMutationInputSchema } from '../inputTypeSchemas/ShiftUpdateManyMutationInputSchema'
import { ShiftUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ShiftUncheckedUpdateManyInputSchema'
import { ShiftWhereInputSchema } from '../inputTypeSchemas/ShiftWhereInputSchema'

export const ShiftUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ShiftUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ShiftUpdateManyMutationInputSchema,ShiftUncheckedUpdateManyInputSchema ]),
  where: ShiftWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ShiftUpdateManyAndReturnArgsSchema;
