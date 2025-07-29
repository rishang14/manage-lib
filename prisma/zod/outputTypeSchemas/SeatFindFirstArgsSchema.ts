import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatIncludeSchema } from '../inputTypeSchemas/SeatIncludeSchema'
import { SeatWhereInputSchema } from '../inputTypeSchemas/SeatWhereInputSchema'
import { SeatOrderByWithRelationInputSchema } from '../inputTypeSchemas/SeatOrderByWithRelationInputSchema'
import { SeatWhereUniqueInputSchema } from '../inputTypeSchemas/SeatWhereUniqueInputSchema'
import { SeatScalarFieldEnumSchema } from '../inputTypeSchemas/SeatScalarFieldEnumSchema'
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { SeatCountOutputTypeArgsSchema } from "../outputTypeSchemas/SeatCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeatSelectSchema: z.ZodType<Prisma.SeatSelect> = z.object({
  id: z.boolean().optional(),
  seatNumber: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SeatCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SeatFindFirstArgsSchema: z.ZodType<Prisma.SeatFindFirstArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: z.lazy(() => SeatIncludeSchema).optional(),
  where: SeatWhereInputSchema.optional(),
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(),SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeatScalarFieldEnumSchema,SeatScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SeatFindFirstArgsSchema;
