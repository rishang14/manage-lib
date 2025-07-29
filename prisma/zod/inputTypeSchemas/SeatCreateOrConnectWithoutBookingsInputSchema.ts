import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatCreateWithoutBookingsInputSchema } from './SeatCreateWithoutBookingsInputSchema';
import { SeatUncheckedCreateWithoutBookingsInputSchema } from './SeatUncheckedCreateWithoutBookingsInputSchema';

export const SeatCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export default SeatCreateOrConnectWithoutBookingsInputSchema;
