import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereInputSchema } from './ShiftWhereInputSchema';
import { ShiftUpdateWithoutBookingsInputSchema } from './ShiftUpdateWithoutBookingsInputSchema';
import { ShiftUncheckedUpdateWithoutBookingsInputSchema } from './ShiftUncheckedUpdateWithoutBookingsInputSchema';

export const ShiftUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => ShiftWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ShiftUpdateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export default ShiftUpdateToOneWithWhereWithoutBookingsInputSchema;
