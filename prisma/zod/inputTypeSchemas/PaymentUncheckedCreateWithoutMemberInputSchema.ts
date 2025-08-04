import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PaymentUncheckedCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutMemberInput> = z.object({
  id: z.string().cuid().optional(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default PaymentUncheckedCreateWithoutMemberInputSchema;
