import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatUpdateWithoutBookingsInputSchema } from './SeatUpdateWithoutBookingsInputSchema';
import { SeatUncheckedUpdateWithoutBookingsInputSchema } from './SeatUncheckedUpdateWithoutBookingsInputSchema';
import { SeatCreateWithoutBookingsInputSchema } from './SeatCreateWithoutBookingsInputSchema';
import { SeatUncheckedCreateWithoutBookingsInputSchema } from './SeatUncheckedCreateWithoutBookingsInputSchema';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';

export const SeatUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => SeatUpdateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => SeatWhereInputSchema).optional()
}).strict();

export default SeatUpsertWithoutBookingsInputSchema;
