import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SeatCreateManyInputSchema: z.ZodType<Prisma.SeatCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string()
}).strict();

export default SeatCreateManyInputSchema;
