import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutSeatInputSchema } from './BookingUncheckedUpdateManyWithoutSeatInputSchema';

export const BookingUpdateManyWithWhereWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutSeatInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutSeatInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutSeatInputSchema;
