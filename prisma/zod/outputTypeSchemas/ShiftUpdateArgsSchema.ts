import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftIncludeSchema } from '../inputTypeSchemas/ShiftIncludeSchema'
import { ShiftUpdateInputSchema } from '../inputTypeSchemas/ShiftUpdateInputSchema'
import { ShiftUncheckedUpdateInputSchema } from '../inputTypeSchemas/ShiftUncheckedUpdateInputSchema'
import { ShiftWhereUniqueInputSchema } from '../inputTypeSchemas/ShiftWhereUniqueInputSchema'
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

export const ShiftUpdateArgsSchema: z.ZodType<Prisma.ShiftUpdateArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: z.lazy(() => ShiftIncludeSchema).optional(),
  data: z.union([ ShiftUpdateInputSchema,ShiftUncheckedUpdateInputSchema ]),
  where: ShiftWhereUniqueInputSchema,
}).strict() ;

export default ShiftUpdateArgsSchema;
