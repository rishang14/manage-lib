import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberCreateWithoutBookingsInputSchema } from './MemberCreateWithoutBookingsInputSchema';
import { MemberUncheckedCreateWithoutBookingsInputSchema } from './MemberUncheckedCreateWithoutBookingsInputSchema';

export const MemberCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export default MemberCreateOrConnectWithoutBookingsInputSchema;
