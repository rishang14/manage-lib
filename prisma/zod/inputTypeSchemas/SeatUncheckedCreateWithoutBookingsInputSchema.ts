import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SeatUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string()
}).strict();

export default SeatUncheckedCreateWithoutBookingsInputSchema;
