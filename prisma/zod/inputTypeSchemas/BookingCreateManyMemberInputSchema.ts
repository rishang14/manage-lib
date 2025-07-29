import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingCreateManyMemberInputSchema: z.ZodType<Prisma.BookingCreateManyMemberInput> = z.object({
  id: z.string().cuid().optional(),
  seatId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingCreateManyMemberInputSchema;
