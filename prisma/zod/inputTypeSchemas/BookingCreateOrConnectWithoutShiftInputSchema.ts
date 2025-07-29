import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutShiftInputSchema } from './BookingCreateWithoutShiftInputSchema';
import { BookingUncheckedCreateWithoutShiftInputSchema } from './BookingUncheckedCreateWithoutShiftInputSchema';

export const BookingCreateOrConnectWithoutShiftInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutShiftInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutShiftInputSchema;
