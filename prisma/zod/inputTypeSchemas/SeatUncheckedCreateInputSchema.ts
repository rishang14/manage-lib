import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutSeatInputSchema } from './BookingUncheckedCreateNestedManyWithoutSeatInputSchema';

export const SeatUncheckedCreateInputSchema: z.ZodType<Prisma.SeatUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutSeatInputSchema).optional()
}).strict();

export default SeatUncheckedCreateInputSchema;
