import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingUncheckedUpdateManyWithoutMemberNestedInputSchema } from './BookingUncheckedUpdateManyWithoutMemberNestedInputSchema';
import { PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema } from './PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema';

export const MemberUncheckedUpdateInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export default MemberUncheckedUpdateInputSchema;
