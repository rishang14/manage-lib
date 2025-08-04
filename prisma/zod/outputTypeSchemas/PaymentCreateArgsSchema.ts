import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentIncludeSchema } from '../inputTypeSchemas/PaymentIncludeSchema'
import { PaymentCreateInputSchema } from '../inputTypeSchemas/PaymentCreateInputSchema'
import { PaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentUncheckedCreateInputSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const PaymentCreateArgsSchema: z.ZodType<Prisma.PaymentCreateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: z.lazy(() => PaymentIncludeSchema).optional(),
  data: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
}).strict() ;

export default PaymentCreateArgsSchema;
