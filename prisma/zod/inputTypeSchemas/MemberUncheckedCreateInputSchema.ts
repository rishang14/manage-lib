import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutMemberInputSchema } from './BookingUncheckedCreateNestedManyWithoutMemberInputSchema';
import { PaymentUncheckedCreateNestedManyWithoutMemberInputSchema } from './PaymentUncheckedCreateNestedManyWithoutMemberInputSchema';

export const MemberUncheckedCreateInputSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberUncheckedCreateInputSchema;
