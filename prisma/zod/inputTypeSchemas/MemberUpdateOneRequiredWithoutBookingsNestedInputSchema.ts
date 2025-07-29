import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutBookingsInputSchema } from './MemberCreateWithoutBookingsInputSchema';
import { MemberUncheckedCreateWithoutBookingsInputSchema } from './MemberUncheckedCreateWithoutBookingsInputSchema';
import { MemberCreateOrConnectWithoutBookingsInputSchema } from './MemberCreateOrConnectWithoutBookingsInputSchema';
import { MemberUpsertWithoutBookingsInputSchema } from './MemberUpsertWithoutBookingsInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateToOneWithWhereWithoutBookingsInputSchema } from './MemberUpdateToOneWithWhereWithoutBookingsInputSchema';
import { MemberUpdateWithoutBookingsInputSchema } from './MemberUpdateWithoutBookingsInputSchema';
import { MemberUncheckedUpdateWithoutBookingsInputSchema } from './MemberUncheckedUpdateWithoutBookingsInputSchema';

export const MemberUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => MemberUpdateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export default MemberUpdateOneRequiredWithoutBookingsNestedInputSchema;
