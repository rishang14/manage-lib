import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutMembersInputSchema } from './LibraryCreateNestedOneWithoutMembersInputSchema';
import { PaymentCreateNestedManyWithoutMemberInputSchema } from './PaymentCreateNestedManyWithoutMemberInputSchema';

export const MemberCreateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional()
}).strict();

export default MemberCreateWithoutBookingsInputSchema;
