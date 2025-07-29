import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutShiftInputSchema } from './BookingUpdateWithoutShiftInputSchema';
import { BookingUncheckedUpdateWithoutShiftInputSchema } from './BookingUncheckedUpdateWithoutShiftInputSchema';
import { BookingCreateWithoutShiftInputSchema } from './BookingCreateWithoutShiftInputSchema';
import { BookingUncheckedCreateWithoutShiftInputSchema } from './BookingUncheckedCreateWithoutShiftInputSchema';

export const BookingUpsertWithWhereUniqueWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutShiftInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutShiftInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutShiftInputSchema;
