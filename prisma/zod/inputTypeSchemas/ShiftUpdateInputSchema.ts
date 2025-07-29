import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema } from './LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema';
import { BookingUpdateManyWithoutShiftNestedInputSchema } from './BookingUpdateManyWithoutShiftNestedInputSchema';

export const ShiftUpdateInputSchema: z.ZodType<Prisma.ShiftUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutShiftNestedInputSchema).optional()
}).strict();

export default ShiftUpdateInputSchema;
