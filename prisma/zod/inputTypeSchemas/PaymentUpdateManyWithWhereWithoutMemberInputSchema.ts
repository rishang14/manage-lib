import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema';
import { PaymentUpdateManyMutationInputSchema } from './PaymentUpdateManyMutationInputSchema';
import { PaymentUncheckedUpdateManyWithoutMemberInputSchema } from './PaymentUncheckedUpdateManyWithoutMemberInputSchema';

export const PaymentUpdateManyWithWhereWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutMemberInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberInputSchema) ]),
}).strict();

export default PaymentUpdateManyWithWhereWithoutMemberInputSchema;
