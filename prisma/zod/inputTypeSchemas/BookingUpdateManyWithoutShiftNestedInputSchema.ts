import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutShiftInputSchema } from './BookingCreateWithoutShiftInputSchema';
import { BookingUncheckedCreateWithoutShiftInputSchema } from './BookingUncheckedCreateWithoutShiftInputSchema';
import { BookingCreateOrConnectWithoutShiftInputSchema } from './BookingCreateOrConnectWithoutShiftInputSchema';
import { BookingUpsertWithWhereUniqueWithoutShiftInputSchema } from './BookingUpsertWithWhereUniqueWithoutShiftInputSchema';
import { BookingCreateManyShiftInputEnvelopeSchema } from './BookingCreateManyShiftInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutShiftInputSchema } from './BookingUpdateWithWhereUniqueWithoutShiftInputSchema';
import { BookingUpdateManyWithWhereWithoutShiftInputSchema } from './BookingUpdateManyWithWhereWithoutShiftInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUpdateManyWithoutShiftNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutShiftNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema),z.lazy(() => BookingCreateWithoutShiftInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema),z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema),z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUpdateManyWithoutShiftNestedInputSchema;
