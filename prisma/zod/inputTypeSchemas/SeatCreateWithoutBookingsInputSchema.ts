import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateNestedOneWithoutSeatsInputSchema } from './LibraryCreateNestedOneWithoutSeatsInputSchema';

export const SeatCreateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateWithoutBookingsInput> = z.object({
  id: z.string().cuid().optional(),
  seatNumber: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutSeatsInputSchema)
}).strict();

export default SeatCreateWithoutBookingsInputSchema;
