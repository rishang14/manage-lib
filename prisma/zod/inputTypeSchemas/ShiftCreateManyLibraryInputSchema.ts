import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ShiftCreateManyLibraryInputSchema: z.ZodType<Prisma.ShiftCreateManyLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string()
}).strict();

export default ShiftCreateManyLibraryInputSchema;
