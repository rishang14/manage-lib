import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutShiftInputSchema } from './BookingUncheckedUpdateManyWithoutShiftInputSchema';

export const BookingUpdateManyWithWhereWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutShiftInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutShiftInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutShiftInputSchema;
