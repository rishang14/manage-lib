import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateWithoutBookingsInputSchema } from './SeatCreateWithoutBookingsInputSchema';
import { SeatUncheckedCreateWithoutBookingsInputSchema } from './SeatUncheckedCreateWithoutBookingsInputSchema';
import { SeatCreateOrConnectWithoutBookingsInputSchema } from './SeatCreateOrConnectWithoutBookingsInputSchema';
import { SeatUpsertWithoutBookingsInputSchema } from './SeatUpsertWithoutBookingsInputSchema';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatUpdateToOneWithWhereWithoutBookingsInputSchema } from './SeatUpdateToOneWithWhereWithoutBookingsInputSchema';
import { SeatUpdateWithoutBookingsInputSchema } from './SeatUpdateWithoutBookingsInputSchema';
import { SeatUncheckedUpdateWithoutBookingsInputSchema } from './SeatUncheckedUpdateWithoutBookingsInputSchema';

export const SeatUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.SeatUpdateOneRequiredWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SeatCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => SeatUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => SeatWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SeatUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => SeatUpdateWithoutBookingsInputSchema),z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export default SeatUpdateOneRequiredWithoutBookingsNestedInputSchema;
