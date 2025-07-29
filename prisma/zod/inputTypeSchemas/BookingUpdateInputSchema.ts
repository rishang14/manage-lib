import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SeatUpdateOneRequiredWithoutBookingsNestedInputSchema } from './SeatUpdateOneRequiredWithoutBookingsNestedInputSchema';
import { MemberUpdateOneRequiredWithoutBookingsNestedInputSchema } from './MemberUpdateOneRequiredWithoutBookingsNestedInputSchema';
import { ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema } from './ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema';

export const BookingUpdateInputSchema: z.ZodType<Prisma.BookingUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  shift: z.lazy(() => ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema).optional()
}).strict();

export default BookingUpdateInputSchema;
