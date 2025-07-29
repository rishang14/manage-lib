import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutMemberInputSchema } from './BookingUpdateWithoutMemberInputSchema';
import { BookingUncheckedUpdateWithoutMemberInputSchema } from './BookingUncheckedUpdateWithoutMemberInputSchema';

export const BookingUpdateWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutMemberInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutMemberInputSchema;
