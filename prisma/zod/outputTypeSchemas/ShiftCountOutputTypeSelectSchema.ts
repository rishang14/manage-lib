import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ShiftCountOutputTypeSelectSchema: z.ZodType<Prisma.ShiftCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
}).strict();

export default ShiftCountOutputTypeSelectSchema;
