import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateNestedOneWithoutBookingsInputSchema } from './SeatCreateNestedOneWithoutBookingsInputSchema';
import { MemberCreateNestedOneWithoutBookingsInputSchema } from './MemberCreateNestedOneWithoutBookingsInputSchema';
import { ShiftCreateNestedOneWithoutBookingsInputSchema } from './ShiftCreateNestedOneWithoutBookingsInputSchema';

export const BookingCreateInputSchema: z.ZodType<Prisma.BookingCreateInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema)
}).strict();

export default BookingCreateInputSchema;
