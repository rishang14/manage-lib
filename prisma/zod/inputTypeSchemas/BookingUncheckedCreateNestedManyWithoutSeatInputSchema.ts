import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutSeatInputSchema } from './BookingCreateWithoutSeatInputSchema';
import { BookingUncheckedCreateWithoutSeatInputSchema } from './BookingUncheckedCreateWithoutSeatInputSchema';
import { BookingCreateOrConnectWithoutSeatInputSchema } from './BookingCreateOrConnectWithoutSeatInputSchema';
import { BookingCreateManySeatInputEnvelopeSchema } from './BookingCreateManySeatInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingUncheckedCreateNestedManyWithoutSeatInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutSeatInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema),z.lazy(() => BookingCreateWithoutSeatInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema),z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedCreateNestedManyWithoutSeatInputSchema;
