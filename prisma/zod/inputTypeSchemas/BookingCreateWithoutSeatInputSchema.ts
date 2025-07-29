import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateNestedOneWithoutBookingsInputSchema } from './MemberCreateNestedOneWithoutBookingsInputSchema';
import { ShiftCreateNestedOneWithoutBookingsInputSchema } from './ShiftCreateNestedOneWithoutBookingsInputSchema';

export const BookingCreateWithoutSeatInputSchema: z.ZodType<Prisma.BookingCreateWithoutSeatInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema)
}).strict();

export default BookingCreateWithoutSeatInputSchema;
