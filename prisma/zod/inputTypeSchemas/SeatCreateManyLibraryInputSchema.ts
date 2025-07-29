import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SeatCreateManyLibraryInputSchema: z.ZodType<Prisma.SeatCreateManyLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string()
}).strict();

export default SeatCreateManyLibraryInputSchema;
