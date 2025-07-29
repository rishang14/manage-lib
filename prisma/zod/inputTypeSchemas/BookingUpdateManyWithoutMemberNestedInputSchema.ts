import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutMemberInputSchema } from './BookingCreateWithoutMemberInputSchema';
import { BookingUncheckedCreateWithoutMemberInputSchema } from './BookingUncheckedCreateWithoutMemberInputSchema';
import { BookingCreateOrConnectWithoutMemberInputSchema } from './BookingCreateOrConnectWithoutMemberInputSchema';
import { BookingUpsertWithWhereUniqueWithoutMemberInputSchema } from './BookingUpsertWithWhereUniqueWithoutMemberInputSchema';
import { BookingCreateManyMemberInputEnvelopeSchema } from './BookingCreateManyMemberInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutMemberInputSchema } from './BookingUpdateWithWhereUniqueWithoutMemberInputSchema';
import { BookingUpdateManyWithWhereWithoutMemberInputSchema } from './BookingUpdateManyWithWhereWithoutMemberInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutMemberNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema),z.lazy(() => BookingCreateWithoutMemberInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema),z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUpdateManyWithoutMemberNestedInputSchema;
