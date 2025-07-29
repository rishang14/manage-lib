import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutShiftInputSchema } from './BookingCreateWithoutShiftInputSchema';
import { BookingUncheckedCreateWithoutShiftInputSchema } from './BookingUncheckedCreateWithoutShiftInputSchema';
import { BookingCreateOrConnectWithoutShiftInputSchema } from './BookingCreateOrConnectWithoutShiftInputSchema';
import { BookingCreateManyShiftInputEnvelopeSchema } from './BookingCreateManyShiftInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingUncheckedCreateNestedManyWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutShiftInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema),z.lazy(() => BookingCreateWithoutShiftInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema),z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedCreateNestedManyWithoutShiftInputSchema;
