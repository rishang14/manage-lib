import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
  id: z.boolean().optional(),
  memberId: z.boolean().optional(),
  startMonth: z.boolean().optional(),
  validTill: z.boolean().optional(),
  duration: z.boolean().optional(),
  amount: z.boolean().optional(),
  paid: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export default PaymentSelectSchema;
