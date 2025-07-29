import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SeatUncheckedUpdateManyWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateManyWithoutLibraryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SeatUncheckedUpdateManyWithoutLibraryInputSchema;
