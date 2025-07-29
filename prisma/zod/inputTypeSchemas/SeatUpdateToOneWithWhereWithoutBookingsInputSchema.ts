import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';
import { SeatUpdateWithoutBookingsInputSchema } from './SeatUpdateWithoutBookingsInputSchema';
import { SeatUncheckedUpdateWithoutBookingsInputSchema } from './SeatUncheckedUpdateWithoutBookingsInputSchema';

export const SeatUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => SeatWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SeatUpdateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export default SeatUpdateToOneWithWhereWithoutBookingsInputSchema;
