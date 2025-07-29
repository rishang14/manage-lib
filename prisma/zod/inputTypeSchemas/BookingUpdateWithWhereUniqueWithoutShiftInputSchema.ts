import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutShiftInputSchema } from './BookingUpdateWithoutShiftInputSchema';
import { BookingUncheckedUpdateWithoutShiftInputSchema } from './BookingUncheckedUpdateWithoutShiftInputSchema';

export const BookingUpdateWithWhereUniqueWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutShiftInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutShiftInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutShiftInputSchema;
