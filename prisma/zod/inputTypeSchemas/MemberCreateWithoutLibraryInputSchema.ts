import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateNestedManyWithoutMemberInputSchema } from './BookingCreateNestedManyWithoutMemberInputSchema';
import { PaymentCreateNestedManyWithoutMemberInputSchema } from './PaymentCreateNestedManyWithoutMemberInputSchema';

export const MemberCreateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberCreateWithoutLibraryInputSchema;
