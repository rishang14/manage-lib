import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutSeatInputSchema } from './BookingCreateWithoutSeatInputSchema';
import { BookingUncheckedCreateWithoutSeatInputSchema } from './BookingUncheckedCreateWithoutSeatInputSchema';

export const BookingCreateOrConnectWithoutSeatInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutSeatInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutSeatInputSchema;
