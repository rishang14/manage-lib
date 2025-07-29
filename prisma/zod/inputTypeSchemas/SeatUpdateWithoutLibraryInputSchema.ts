import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookingUpdateManyWithoutSeatNestedInputSchema } from './BookingUpdateManyWithoutSeatNestedInputSchema';

export const SeatUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateWithoutLibraryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutSeatNestedInputSchema).optional()
}).strict();

export default SeatUpdateWithoutLibraryInputSchema;
