import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema } from './LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema';

export const SeatUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema).optional()
}).strict();

export default SeatUpdateWithoutBookingsInputSchema;
