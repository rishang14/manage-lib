import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingUpdateManyWithoutMemberNestedInputSchema } from './BookingUpdateManyWithoutMemberNestedInputSchema';
import { PaymentUpdateManyWithoutMemberNestedInputSchema } from './PaymentUpdateManyWithoutMemberNestedInputSchema';

export const MemberUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateWithoutLibraryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export default MemberUpdateWithoutLibraryInputSchema;
