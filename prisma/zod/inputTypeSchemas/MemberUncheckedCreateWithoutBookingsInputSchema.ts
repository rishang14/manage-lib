import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentUncheckedCreateNestedManyWithoutMemberInputSchema } from './PaymentUncheckedCreateNestedManyWithoutMemberInputSchema';

export const MemberUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberUncheckedCreateWithoutBookingsInputSchema;
