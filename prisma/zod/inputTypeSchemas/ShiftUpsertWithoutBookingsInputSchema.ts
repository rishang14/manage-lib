import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftUpdateWithoutBookingsInputSchema } from './ShiftUpdateWithoutBookingsInputSchema';
import { ShiftUncheckedUpdateWithoutBookingsInputSchema } from './ShiftUncheckedUpdateWithoutBookingsInputSchema';
import { ShiftCreateWithoutBookingsInputSchema } from './ShiftCreateWithoutBookingsInputSchema';
import { ShiftUncheckedCreateWithoutBookingsInputSchema } from './ShiftUncheckedCreateWithoutBookingsInputSchema';
import { ShiftWhereInputSchema } from './ShiftWhereInputSchema';

export const ShiftUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => ShiftUpdateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => ShiftWhereInputSchema).optional()
}).strict();

export default ShiftUpsertWithoutBookingsInputSchema;
