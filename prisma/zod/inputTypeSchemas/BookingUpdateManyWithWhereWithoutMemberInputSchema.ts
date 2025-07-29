import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutMemberInputSchema } from './BookingUncheckedUpdateManyWithoutMemberInputSchema';

export const BookingUpdateManyWithWhereWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutMemberInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutMemberInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutMemberInputSchema;
