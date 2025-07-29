import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatIncludeSchema } from '../inputTypeSchemas/SeatIncludeSchema'
import { SeatWhereUniqueInputSchema } from '../inputTypeSchemas/SeatWhereUniqueInputSchema'
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

export const SeatFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SeatFindUniqueOrThrowArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: z.lazy(() => SeatIncludeSchema).optional(),
  where: SeatWhereUniqueInputSchema,
}).strict() ;

export default SeatFindUniqueOrThrowArgsSchema;
