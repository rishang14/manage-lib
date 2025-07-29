import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutShiftsInputSchema } from './LibraryCreateNestedOneWithoutShiftsInputSchema';
import { BookingCreateNestedManyWithoutShiftInputSchema } from './BookingCreateNestedManyWithoutShiftInputSchema';

export const ShiftCreateInputSchema: z.ZodType<Prisma.ShiftCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutShiftsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutShiftInputSchema).optional()
}).strict();

export default ShiftCreateInputSchema;
