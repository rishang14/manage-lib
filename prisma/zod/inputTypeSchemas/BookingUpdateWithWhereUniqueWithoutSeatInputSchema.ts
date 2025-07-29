import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutSeatInputSchema } from './BookingUpdateWithoutSeatInputSchema';
import { BookingUncheckedUpdateWithoutSeatInputSchema } from './BookingUncheckedUpdateWithoutSeatInputSchema';

export const BookingUpdateWithWhereUniqueWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutSeatInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutSeatInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutSeatInputSchema;
