import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { ShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShiftCountOutputTypeArgsSchema"

export const ShiftIncludeSchema: z.ZodType<Prisma.ShiftInclude> = z.object({
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShiftCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ShiftIncludeSchema;
