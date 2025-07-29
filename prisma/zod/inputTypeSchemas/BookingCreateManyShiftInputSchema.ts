import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingCreateManyShiftInputSchema: z.ZodType<Prisma.BookingCreateManyShiftInput> = z.object({
  id: z.string().cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingCreateManyShiftInputSchema;
