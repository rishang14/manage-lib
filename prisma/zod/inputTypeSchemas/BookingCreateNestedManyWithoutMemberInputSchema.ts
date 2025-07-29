import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutMemberInputSchema } from './BookingCreateWithoutMemberInputSchema';
import { BookingUncheckedCreateWithoutMemberInputSchema } from './BookingUncheckedCreateWithoutMemberInputSchema';
import { BookingCreateOrConnectWithoutMemberInputSchema } from './BookingCreateOrConnectWithoutMemberInputSchema';
import { BookingCreateManyMemberInputEnvelopeSchema } from './BookingCreateManyMemberInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutMemberInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema),z.lazy(() => BookingCreateWithoutMemberInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema),z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingCreateNestedManyWithoutMemberInputSchema;
