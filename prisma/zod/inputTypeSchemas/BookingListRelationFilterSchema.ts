import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingListRelationFilterSchema: z.ZodType<Prisma.BookingListRelationFilter> = z.object({
  every: z.lazy(() => BookingWhereInputSchema).optional(),
  some: z.lazy(() => BookingWhereInputSchema).optional(),
  none: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingListRelationFilterSchema;
