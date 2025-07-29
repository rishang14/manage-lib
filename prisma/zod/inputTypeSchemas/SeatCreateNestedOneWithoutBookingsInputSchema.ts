import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateWithoutBookingsInputSchema } from './SeatCreateWithoutBookingsInputSchema';
import { SeatUncheckedCreateWithoutBookingsInputSchema } from './SeatUncheckedCreateWithoutBookingsInputSchema';
import { SeatCreateOrConnectWithoutBookingsInputSchema } from './SeatCreateOrConnectWithoutBookingsInputSchema';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';

export const SeatCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SeatCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => SeatWhereUniqueInputSchema).optional()
}).strict();

export default SeatCreateNestedOneWithoutBookingsInputSchema;
