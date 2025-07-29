import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftCreateWithoutBookingsInputSchema } from './ShiftCreateWithoutBookingsInputSchema';
import { ShiftUncheckedCreateWithoutBookingsInputSchema } from './ShiftUncheckedCreateWithoutBookingsInputSchema';

export const ShiftCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export default ShiftCreateOrConnectWithoutBookingsInputSchema;
