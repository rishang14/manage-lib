import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManySeatInputSchema } from './BookingCreateManySeatInputSchema';

export const BookingCreateManySeatInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManySeatInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManySeatInputSchema),z.lazy(() => BookingCreateManySeatInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManySeatInputEnvelopeSchema;
