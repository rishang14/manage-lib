import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingUncheckedCreateWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutShiftInput> = z.object({
  id: z.string().cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingUncheckedCreateWithoutShiftInputSchema;
