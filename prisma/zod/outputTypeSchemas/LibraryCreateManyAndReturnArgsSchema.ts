import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryCreateManyInputSchema } from '../inputTypeSchemas/LibraryCreateManyInputSchema'

export const LibraryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LibraryCreateManyAndReturnArgs> = z.object({
  data: z.union([ LibraryCreateManyInputSchema,LibraryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LibraryCreateManyAndReturnArgsSchema;
