import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutSeatInputSchema } from './BookingUpdateWithoutSeatInputSchema';
import { BookingUncheckedUpdateWithoutSeatInputSchema } from './BookingUncheckedUpdateWithoutSeatInputSchema';
import { BookingCreateWithoutSeatInputSchema } from './BookingCreateWithoutSeatInputSchema';
import { BookingUncheckedCreateWithoutSeatInputSchema } from './BookingUncheckedCreateWithoutSeatInputSchema';

export const BookingUpsertWithWhereUniqueWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutSeatInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutSeatInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutSeatInputSchema;
