import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateNestedManyWithoutSeatInputSchema } from './BookingCreateNestedManyWithoutSeatInputSchema';

export const SeatCreateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutSeatInputSchema).optional()
}).strict();

export default SeatCreateWithoutLibraryInputSchema;
