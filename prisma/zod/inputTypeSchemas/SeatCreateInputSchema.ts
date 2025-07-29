import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutSeatsInputSchema } from './LibraryCreateNestedOneWithoutSeatsInputSchema';
import { BookingCreateNestedManyWithoutSeatInputSchema } from './BookingCreateNestedManyWithoutSeatInputSchema';

export const SeatCreateInputSchema: z.ZodType<Prisma.SeatCreateInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutSeatsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutSeatInputSchema).optional()
}).strict();

export default SeatCreateInputSchema;
