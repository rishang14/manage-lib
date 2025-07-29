import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PaymentCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateWithoutMemberInput> = z.object({
  id: z.string().cuid().optional(),
  month: z.string(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default PaymentCreateWithoutMemberInputSchema;
