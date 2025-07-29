import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateNestedOneWithoutPaymentsInputSchema } from './MemberCreateNestedOneWithoutPaymentsInputSchema';

export const PaymentCreateInputSchema: z.ZodType<Prisma.PaymentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  month: z.string(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutPaymentsInputSchema)
}).strict();

export default PaymentCreateInputSchema;
