import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryWhereInputSchema } from '../inputTypeSchemas/LibraryWhereInputSchema'
import { LibraryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LibraryOrderByWithAggregationInputSchema'
import { LibraryScalarFieldEnumSchema } from '../inputTypeSchemas/LibraryScalarFieldEnumSchema'
import { LibraryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LibraryScalarWhereWithAggregatesInputSchema'

export const LibraryGroupByArgsSchema: z.ZodType<Prisma.LibraryGroupByArgs> = z.object({
  where: LibraryWhereInputSchema.optional(),
  orderBy: z.union([ LibraryOrderByWithAggregationInputSchema.array(),LibraryOrderByWithAggregationInputSchema ]).optional(),
  by: LibraryScalarFieldEnumSchema.array(),
  having: LibraryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LibraryGroupByArgsSchema;
