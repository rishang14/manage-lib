import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { ShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShiftCountOutputTypeArgsSchema"

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

export default ShiftSelectSchema;
