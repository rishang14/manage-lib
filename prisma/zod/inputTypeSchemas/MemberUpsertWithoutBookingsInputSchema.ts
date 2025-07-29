import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberUpdateWithoutBookingsInputSchema } from './MemberUpdateWithoutBookingsInputSchema';
import { MemberUncheckedUpdateWithoutBookingsInputSchema } from './MemberUncheckedUpdateWithoutBookingsInputSchema';
import { MemberCreateWithoutBookingsInputSchema } from './MemberCreateWithoutBookingsInputSchema';
import { MemberUncheckedCreateWithoutBookingsInputSchema } from './MemberUncheckedCreateWithoutBookingsInputSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export default MemberUpsertWithoutBookingsInputSchema;
