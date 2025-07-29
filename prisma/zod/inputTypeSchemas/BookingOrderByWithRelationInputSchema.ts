import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SeatOrderByWithRelationInputSchema } from './SeatOrderByWithRelationInputSchema';
import { MemberOrderByWithRelationInputSchema } from './MemberOrderByWithRelationInputSchema';
import { ShiftOrderByWithRelationInputSchema } from './ShiftOrderByWithRelationInputSchema';

export const BookingOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  seat: z.lazy(() => SeatOrderByWithRelationInputSchema).optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
  shift: z.lazy(() => ShiftOrderByWithRelationInputSchema).optional()
}).strict();

export default BookingOrderByWithRelationInputSchema;
