import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutShiftsInputSchema } from './LibraryCreateNestedOneWithoutShiftsInputSchema';

export const ShiftCreateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutShiftsInputSchema)
}).strict();

export default ShiftCreateWithoutBookingsInputSchema;
