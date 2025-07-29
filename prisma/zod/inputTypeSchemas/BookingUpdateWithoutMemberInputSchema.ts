import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SeatUpdateOneRequiredWithoutBookingsNestedInputSchema } from './SeatUpdateOneRequiredWithoutBookingsNestedInputSchema';
import { ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema } from './ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema';

export const BookingUpdateWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateWithoutMemberInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  shift: z.lazy(() => ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema).optional()
}).strict();

export default BookingUpdateWithoutMemberInputSchema;
