import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema } from './LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema';

export const ShiftUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema).optional()
}).strict();

export default ShiftUpdateWithoutBookingsInputSchema;
