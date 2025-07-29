import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';
import { MemberUpdateWithoutPaymentsInputSchema } from './MemberUpdateWithoutPaymentsInputSchema';
import { MemberUncheckedUpdateWithoutPaymentsInputSchema } from './MemberUncheckedUpdateWithoutPaymentsInputSchema';

export const MemberUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export default MemberUpdateToOneWithWhereWithoutPaymentsInputSchema;
