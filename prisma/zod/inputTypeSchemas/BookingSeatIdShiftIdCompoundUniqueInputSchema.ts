import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingSeatIdShiftIdCompoundUniqueInputSchema: z.ZodType<Prisma.BookingSeatIdShiftIdCompoundUniqueInput> = z.object({
  seatId: z.string(),
  shiftId: z.string()
}).strict();

export default BookingSeatIdShiftIdCompoundUniqueInputSchema;
