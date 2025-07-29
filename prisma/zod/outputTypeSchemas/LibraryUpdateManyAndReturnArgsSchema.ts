import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LibraryUpdateManyMutationInputSchema'
import { LibraryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LibraryUncheckedUpdateManyInputSchema'
import { LibraryWhereInputSchema } from '../inputTypeSchemas/LibraryWhereInputSchema'

export const LibraryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LibraryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LibraryUpdateManyMutationInputSchema,LibraryUncheckedUpdateManyInputSchema ]),
  where: LibraryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default LibraryUpdateManyAndReturnArgsSchema;
