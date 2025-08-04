import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PaymentUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  memberId: z.string(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default PaymentUncheckedCreateInputSchema;
