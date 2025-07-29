import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutPaymentsInputSchema } from './MemberCreateWithoutPaymentsInputSchema';
import { MemberUncheckedCreateWithoutPaymentsInputSchema } from './MemberUncheckedCreateWithoutPaymentsInputSchema';
import { MemberCreateOrConnectWithoutPaymentsInputSchema } from './MemberCreateOrConnectWithoutPaymentsInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';

export const MemberCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export default MemberCreateNestedOneWithoutPaymentsInputSchema;
