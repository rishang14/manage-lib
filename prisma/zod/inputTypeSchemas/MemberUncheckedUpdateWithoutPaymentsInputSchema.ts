import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingUncheckedUpdateManyWithoutMemberNestedInputSchema } from './BookingUncheckedUpdateManyWithoutMemberNestedInputSchema';

export const MemberUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutPaymentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export default MemberUncheckedUpdateWithoutPaymentsInputSchema;
