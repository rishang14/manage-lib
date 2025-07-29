import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutMembersInputSchema } from './LibraryCreateNestedOneWithoutMembersInputSchema';
import { BookingCreateNestedManyWithoutMemberInputSchema } from './BookingCreateNestedManyWithoutMemberInputSchema';

export const MemberCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateWithoutPaymentsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberCreateWithoutPaymentsInputSchema;
