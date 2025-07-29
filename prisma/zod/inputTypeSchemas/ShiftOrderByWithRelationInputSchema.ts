import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LibraryOrderByWithRelationInputSchema } from './LibraryOrderByWithRelationInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';

export const ShiftOrderByWithRelationInputSchema: z.ZodType<Prisma.ShiftOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ShiftOrderByWithRelationInputSchema;
