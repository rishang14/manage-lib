import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutMembersInputSchema } from './LibraryCreateNestedOneWithoutMembersInputSchema';
import { BookingCreateNestedManyWithoutMemberInputSchema } from './BookingCreateNestedManyWithoutMemberInputSchema';
import { PaymentCreateNestedManyWithoutMemberInputSchema } from './PaymentCreateNestedManyWithoutMemberInputSchema';

export const MemberCreateInputSchema: z.ZodType<Prisma.MemberCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberCreateInputSchema;
