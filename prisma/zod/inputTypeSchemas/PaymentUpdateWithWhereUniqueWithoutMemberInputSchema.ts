import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema';
import { PaymentUpdateWithoutMemberInputSchema } from './PaymentUpdateWithoutMemberInputSchema';
import { PaymentUncheckedUpdateWithoutMemberInputSchema } from './PaymentUncheckedUpdateWithoutMemberInputSchema';

export const PaymentUpdateWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
}).strict();

export default PaymentUpdateWithWhereUniqueWithoutMemberInputSchema;
