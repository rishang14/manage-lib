import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutMemberInputSchema } from './BookingUncheckedCreateNestedManyWithoutMemberInputSchema';

export const MemberUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberUncheckedCreateWithoutPaymentsInputSchema;
