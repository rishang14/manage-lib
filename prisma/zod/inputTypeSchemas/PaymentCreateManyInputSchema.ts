import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PaymentCreateManyInputSchema: z.ZodType<Prisma.PaymentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  memberId: z.string(),
  month: z.string(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default PaymentCreateManyInputSchema;
