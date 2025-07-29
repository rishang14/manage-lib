import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryWhereInputSchema } from '../inputTypeSchemas/LibraryWhereInputSchema'
import { LibraryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LibraryOrderByWithRelationInputSchema'
import { LibraryWhereUniqueInputSchema } from '../inputTypeSchemas/LibraryWhereUniqueInputSchema'

export const LibraryAggregateArgsSchema: z.ZodType<Prisma.LibraryAggregateArgs> = z.object({
  where: LibraryWhereInputSchema.optional(),
  orderBy: z.union([ LibraryOrderByWithRelationInputSchema.array(),LibraryOrderByWithRelationInputSchema ]).optional(),
  cursor: LibraryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LibraryAggregateArgsSchema;
