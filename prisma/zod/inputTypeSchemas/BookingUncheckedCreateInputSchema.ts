import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingUncheckedCreateInputSchema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingUncheckedCreateInputSchema;
