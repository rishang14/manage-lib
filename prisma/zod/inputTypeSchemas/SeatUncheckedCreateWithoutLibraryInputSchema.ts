import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutSeatInputSchema } from './BookingUncheckedCreateNestedManyWithoutSeatInputSchema';

export const SeatUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutSeatInputSchema).optional()
}).strict();

export default SeatUncheckedCreateWithoutLibraryInputSchema;
