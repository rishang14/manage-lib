import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutPaymentsInputSchema } from './MemberCreateWithoutPaymentsInputSchema';
import { MemberUncheckedCreateWithoutPaymentsInputSchema } from './MemberUncheckedCreateWithoutPaymentsInputSchema';
import { MemberCreateOrConnectWithoutPaymentsInputSchema } from './MemberCreateOrConnectWithoutPaymentsInputSchema';
import { MemberUpsertWithoutPaymentsInputSchema } from './MemberUpsertWithoutPaymentsInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateToOneWithWhereWithoutPaymentsInputSchema } from './MemberUpdateToOneWithWhereWithoutPaymentsInputSchema';
import { MemberUpdateWithoutPaymentsInputSchema } from './MemberUpdateWithoutPaymentsInputSchema';
import { MemberUncheckedUpdateWithoutPaymentsInputSchema } from './MemberUncheckedUpdateWithoutPaymentsInputSchema';

export const MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => MemberUpdateWithoutPaymentsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export default MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema;
