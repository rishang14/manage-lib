import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema';
import { PaymentUpdateWithoutMemberInputSchema } from './PaymentUpdateWithoutMemberInputSchema';
import { PaymentUncheckedUpdateWithoutMemberInputSchema } from './PaymentUncheckedUpdateWithoutMemberInputSchema';
import { PaymentCreateWithoutMemberInputSchema } from './PaymentCreateWithoutMemberInputSchema';
import { PaymentUncheckedCreateWithoutMemberInputSchema } from './PaymentUncheckedCreateWithoutMemberInputSchema';

export const PaymentUpsertWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export default PaymentUpsertWithWhereUniqueWithoutMemberInputSchema;
