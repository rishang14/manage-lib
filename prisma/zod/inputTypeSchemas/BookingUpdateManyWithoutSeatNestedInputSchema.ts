import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutSeatInputSchema } from './BookingCreateWithoutSeatInputSchema';
import { BookingUncheckedCreateWithoutSeatInputSchema } from './BookingUncheckedCreateWithoutSeatInputSchema';
import { BookingCreateOrConnectWithoutSeatInputSchema } from './BookingCreateOrConnectWithoutSeatInputSchema';
import { BookingUpsertWithWhereUniqueWithoutSeatInputSchema } from './BookingUpsertWithWhereUniqueWithoutSeatInputSchema';
import { BookingCreateManySeatInputEnvelopeSchema } from './BookingCreateManySeatInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutSeatInputSchema } from './BookingUpdateWithWhereUniqueWithoutSeatInputSchema';
import { BookingUpdateManyWithWhereWithoutSeatInputSchema } from './BookingUpdateManyWithWhereWithoutSeatInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUpdateManyWithoutSeatNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutSeatNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema),z.lazy(() => BookingCreateWithoutSeatInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema),z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema),z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUpdateManyWithoutSeatNestedInputSchema;
