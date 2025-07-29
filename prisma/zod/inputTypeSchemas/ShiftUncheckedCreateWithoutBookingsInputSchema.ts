import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ShiftUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string()
}).strict();

export default ShiftUncheckedCreateWithoutBookingsInputSchema;
