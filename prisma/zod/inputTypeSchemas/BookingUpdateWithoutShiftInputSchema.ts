import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SeatUpdateOneRequiredWithoutBookingsNestedInputSchema } from './SeatUpdateOneRequiredWithoutBookingsNestedInputSchema';
import { MemberUpdateOneRequiredWithoutBookingsNestedInputSchema } from './MemberUpdateOneRequiredWithoutBookingsNestedInputSchema';

export const BookingUpdateWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateWithoutShiftInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutBookingsNestedInputSchema).optional()
}).strict();

export default BookingUpdateWithoutShiftInputSchema;
