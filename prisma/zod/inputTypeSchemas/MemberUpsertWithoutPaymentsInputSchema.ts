import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberUpdateWithoutPaymentsInputSchema } from './MemberUpdateWithoutPaymentsInputSchema';
import { MemberUncheckedUpdateWithoutPaymentsInputSchema } from './MemberUncheckedUpdateWithoutPaymentsInputSchema';
import { MemberCreateWithoutPaymentsInputSchema } from './MemberCreateWithoutPaymentsInputSchema';
import { MemberUncheckedCreateWithoutPaymentsInputSchema } from './MemberUncheckedCreateWithoutPaymentsInputSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export default MemberUpsertWithoutPaymentsInputSchema;
