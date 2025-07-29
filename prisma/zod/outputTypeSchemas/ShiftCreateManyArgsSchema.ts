import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftCreateManyInputSchema } from '../inputTypeSchemas/ShiftCreateManyInputSchema'

export const ShiftCreateManyArgsSchema: z.ZodType<Prisma.ShiftCreateManyArgs> = z.object({
  data: z.union([ ShiftCreateManyInputSchema,ShiftCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ShiftCreateManyArgsSchema;
