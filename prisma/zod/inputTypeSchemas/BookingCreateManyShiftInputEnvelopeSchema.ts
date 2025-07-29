import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManyShiftInputSchema } from './BookingCreateManyShiftInputSchema';

export const BookingCreateManyShiftInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyShiftInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyShiftInputSchema),z.lazy(() => BookingCreateManyShiftInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyShiftInputEnvelopeSchema;
