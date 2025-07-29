import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutMemberInputSchema } from './BookingCreateWithoutMemberInputSchema';
import { BookingUncheckedCreateWithoutMemberInputSchema } from './BookingUncheckedCreateWithoutMemberInputSchema';

export const BookingCreateOrConnectWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutMemberInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutMemberInputSchema;
