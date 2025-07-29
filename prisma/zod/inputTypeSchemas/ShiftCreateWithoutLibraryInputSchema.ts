import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateNestedManyWithoutShiftInputSchema } from './BookingCreateNestedManyWithoutShiftInputSchema';

export const ShiftCreateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutShiftInputSchema).optional()
}).strict();

export default ShiftCreateWithoutLibraryInputSchema;
