import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryWhereInputSchema } from '../inputTypeSchemas/LibraryWhereInputSchema'

export const LibraryDeleteManyArgsSchema: z.ZodType<Prisma.LibraryDeleteManyArgs> = z.object({
  where: LibraryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default LibraryDeleteManyArgsSchema;
