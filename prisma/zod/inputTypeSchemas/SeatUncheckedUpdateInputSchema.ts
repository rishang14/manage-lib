import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookingUncheckedUpdateManyWithoutSeatNestedInputSchema } from './BookingUncheckedUpdateManyWithoutSeatNestedInputSchema';

export const SeatUncheckedUpdateInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutSeatNestedInputSchema).optional()
}).strict();

export default SeatUncheckedUpdateInputSchema;
