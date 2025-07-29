import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentCreateManyMemberInputSchema } from './PaymentCreateManyMemberInputSchema';

export const PaymentCreateManyMemberInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyMemberInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyMemberInputSchema),z.lazy(() => PaymentCreateManyMemberInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PaymentCreateManyMemberInputEnvelopeSchema;
