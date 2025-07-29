import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberCreateWithoutPaymentsInputSchema } from './MemberCreateWithoutPaymentsInputSchema';
import { MemberUncheckedCreateWithoutPaymentsInputSchema } from './MemberUncheckedCreateWithoutPaymentsInputSchema';

export const MemberCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export default MemberCreateOrConnectWithoutPaymentsInputSchema;
