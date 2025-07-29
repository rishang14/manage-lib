import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftIncludeSchema } from '../inputTypeSchemas/ShiftIncludeSchema'
import { ShiftWhereInputSchema } from '../inputTypeSchemas/ShiftWhereInputSchema'
import { ShiftOrderByWithRelationInputSchema } from '../inputTypeSchemas/ShiftOrderByWithRelationInputSchema'
import { ShiftWhereUniqueInputSchema } from '../inputTypeSchemas/ShiftWhereUniqueInputSchema'
import { ShiftScalarFieldEnumSchema } from '../inputTypeSchemas/ShiftScalarFieldEnumSchema'
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { ShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShiftCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ShiftSelectSchema: z.ZodType<Prisma.ShiftSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShiftCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ShiftFindFirstArgsSchema: z.ZodType<Prisma.ShiftFindFirstArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: z.lazy(() => ShiftIncludeSchema).optional(),
  where: ShiftWhereInputSchema.optional(),
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(),ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShiftScalarFieldEnumSchema,ShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ShiftFindFirstArgsSchema;
