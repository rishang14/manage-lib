import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManyMemberInputSchema } from './BookingCreateManyMemberInputSchema';

export const BookingCreateManyMemberInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyMemberInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyMemberInputSchema),z.lazy(() => BookingCreateManyMemberInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyMemberInputEnvelopeSchema;
