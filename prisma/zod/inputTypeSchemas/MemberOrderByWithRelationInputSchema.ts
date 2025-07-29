import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LibraryOrderByWithRelationInputSchema } from './LibraryOrderByWithRelationInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';
import { PaymentOrderByRelationAggregateInputSchema } from './PaymentOrderByRelationAggregateInputSchema';

export const MemberOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional()
}).strict();

export default MemberOrderByWithRelationInputSchema;
