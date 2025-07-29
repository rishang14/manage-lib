import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LibraryUpdateOneRequiredWithoutMembersNestedInputSchema } from './LibraryUpdateOneRequiredWithoutMembersNestedInputSchema';
import { PaymentUpdateManyWithoutMemberNestedInputSchema } from './PaymentUpdateManyWithoutMemberNestedInputSchema';

export const MemberUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional()
}).strict();

export default MemberUpdateWithoutBookingsInputSchema;
