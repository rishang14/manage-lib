import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PaymentMemberIdMonthCompoundUniqueInputSchema: z.ZodType<Prisma.PaymentMemberIdMonthCompoundUniqueInput> = z.object({
  memberId: z.string(),
  month: z.string()
}).strict();

export default PaymentMemberIdMonthCompoundUniqueInputSchema;
