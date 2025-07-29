import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutBookingsInputSchema } from './MemberCreateWithoutBookingsInputSchema';
import { MemberUncheckedCreateWithoutBookingsInputSchema } from './MemberUncheckedCreateWithoutBookingsInputSchema';
import { MemberCreateOrConnectWithoutBookingsInputSchema } from './MemberCreateOrConnectWithoutBookingsInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';

export const MemberCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export default MemberCreateNestedOneWithoutBookingsInputSchema;
