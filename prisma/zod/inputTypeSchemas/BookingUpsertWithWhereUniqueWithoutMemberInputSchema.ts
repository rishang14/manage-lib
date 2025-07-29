import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutMemberInputSchema } from './BookingUpdateWithoutMemberInputSchema';
import { BookingUncheckedUpdateWithoutMemberInputSchema } from './BookingUncheckedUpdateWithoutMemberInputSchema';
import { BookingCreateWithoutMemberInputSchema } from './BookingCreateWithoutMemberInputSchema';
import { BookingUncheckedCreateWithoutMemberInputSchema } from './BookingUncheckedCreateWithoutMemberInputSchema';

export const BookingUpsertWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutMemberInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutMemberInputSchema;
