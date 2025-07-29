import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema';
import { PaymentCreateWithoutMemberInputSchema } from './PaymentCreateWithoutMemberInputSchema';
import { PaymentUncheckedCreateWithoutMemberInputSchema } from './PaymentUncheckedCreateWithoutMemberInputSchema';

export const PaymentCreateOrConnectWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
}).strict();

export default PaymentCreateOrConnectWithoutMemberInputSchema;
