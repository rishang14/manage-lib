import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateNestedOneWithoutBookingsInputSchema } from './SeatCreateNestedOneWithoutBookingsInputSchema';
import { MemberCreateNestedOneWithoutBookingsInputSchema } from './MemberCreateNestedOneWithoutBookingsInputSchema';

export const BookingCreateWithoutShiftInputSchema: z.ZodType<Prisma.BookingCreateWithoutShiftInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema)
}).strict();

export default BookingCreateWithoutShiftInputSchema;
