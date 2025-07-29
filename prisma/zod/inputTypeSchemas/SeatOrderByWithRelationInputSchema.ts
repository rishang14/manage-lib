import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LibraryOrderByWithRelationInputSchema } from './LibraryOrderByWithRelationInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';

export const SeatOrderByWithRelationInputSchema: z.ZodType<Prisma.SeatOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default SeatOrderByWithRelationInputSchema;
