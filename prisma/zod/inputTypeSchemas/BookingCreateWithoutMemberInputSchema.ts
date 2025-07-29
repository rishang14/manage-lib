import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateNestedOneWithoutBookingsInputSchema } from './SeatCreateNestedOneWithoutBookingsInputSchema';
import { ShiftCreateNestedOneWithoutBookingsInputSchema } from './ShiftCreateNestedOneWithoutBookingsInputSchema';

export const BookingCreateWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateWithoutMemberInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema)
}).strict();

export default BookingCreateWithoutMemberInputSchema;
