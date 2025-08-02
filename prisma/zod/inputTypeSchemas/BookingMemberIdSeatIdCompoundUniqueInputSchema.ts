import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookingMemberIdSeatIdCompoundUniqueInputSchema: z.ZodType<Prisma.BookingMemberIdSeatIdCompoundUniqueInput> = z.object({
  memberId: z.string(),
  seatId: z.string()
}).strict();

export default BookingMemberIdSeatIdCompoundUniqueInputSchema;
