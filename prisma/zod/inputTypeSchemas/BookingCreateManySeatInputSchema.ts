import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingCreateManySeatInputSchema: z.ZodType<Prisma.BookingCreateManySeatInput> = z.object({
  id: z.string().cuid().optional(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingCreateManySeatInputSchema;
