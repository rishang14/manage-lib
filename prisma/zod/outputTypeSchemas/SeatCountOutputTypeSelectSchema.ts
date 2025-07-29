import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SeatCountOutputTypeSelectSchema: z.ZodType<Prisma.SeatCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
}).strict();

export default SeatCountOutputTypeSelectSchema;
