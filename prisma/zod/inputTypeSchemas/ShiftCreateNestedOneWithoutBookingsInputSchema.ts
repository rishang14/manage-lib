import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftCreateWithoutBookingsInputSchema } from './ShiftCreateWithoutBookingsInputSchema';
import { ShiftUncheckedCreateWithoutBookingsInputSchema } from './ShiftUncheckedCreateWithoutBookingsInputSchema';
import { ShiftCreateOrConnectWithoutBookingsInputSchema } from './ShiftCreateOrConnectWithoutBookingsInputSchema';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';

export const ShiftCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShiftCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => ShiftWhereUniqueInputSchema).optional()
}).strict();

export default ShiftCreateNestedOneWithoutBookingsInputSchema;
