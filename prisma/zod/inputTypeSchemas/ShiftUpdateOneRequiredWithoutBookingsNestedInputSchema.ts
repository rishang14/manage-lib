import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftCreateWithoutBookingsInputSchema } from './ShiftCreateWithoutBookingsInputSchema';
import { ShiftUncheckedCreateWithoutBookingsInputSchema } from './ShiftUncheckedCreateWithoutBookingsInputSchema';
import { ShiftCreateOrConnectWithoutBookingsInputSchema } from './ShiftCreateOrConnectWithoutBookingsInputSchema';
import { ShiftUpsertWithoutBookingsInputSchema } from './ShiftUpsertWithoutBookingsInputSchema';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftUpdateToOneWithWhereWithoutBookingsInputSchema } from './ShiftUpdateToOneWithWhereWithoutBookingsInputSchema';
import { ShiftUpdateWithoutBookingsInputSchema } from './ShiftUpdateWithoutBookingsInputSchema';
import { ShiftUncheckedUpdateWithoutBookingsInputSchema } from './ShiftUncheckedUpdateWithoutBookingsInputSchema';

export const ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.ShiftUpdateOneRequiredWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShiftCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => ShiftUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => ShiftWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ShiftUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => ShiftUpdateWithoutBookingsInputSchema),z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export default ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema;
