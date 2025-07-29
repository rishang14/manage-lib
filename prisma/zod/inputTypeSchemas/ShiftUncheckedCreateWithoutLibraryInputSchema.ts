import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutShiftInputSchema } from './BookingUncheckedCreateNestedManyWithoutShiftInputSchema';

export const ShiftUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutShiftInputSchema).optional()
}).strict();

export default ShiftUncheckedCreateWithoutLibraryInputSchema;
