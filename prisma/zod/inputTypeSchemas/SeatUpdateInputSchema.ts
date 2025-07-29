import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema } from './LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema';
import { BookingUpdateManyWithoutSeatNestedInputSchema } from './BookingUpdateManyWithoutSeatNestedInputSchema';

export const SeatUpdateInputSchema: z.ZodType<Prisma.SeatUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutSeatNestedInputSchema).optional()
}).strict();

export default SeatUpdateInputSchema;
