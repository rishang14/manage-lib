import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentIncludeSchema } from '../inputTypeSchemas/PaymentIncludeSchema'
import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { PaymentCreateInputSchema } from '../inputTypeSchemas/PaymentCreateInputSchema'
import { PaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentUncheckedCreateInputSchema'
import { PaymentUpdateInputSchema } from '../inputTypeSchemas/PaymentUpdateInputSchema'
import { PaymentUncheckedUpdateInputSchema } from '../inputTypeSchemas/PaymentUncheckedUpdateInputSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
  id: z.boolean().optional(),
  memberId: z.boolean().optional(),
  month: z.boolean().optional(),
  amount: z.boolean().optional(),
  paid: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export const PaymentUpsertArgsSchema: z.ZodType<Prisma.PaymentUpsertArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: z.lazy(() => PaymentIncludeSchema).optional(),
  where: PaymentWhereUniqueInputSchema,
  create: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
  update: z.union([ PaymentUpdateInputSchema,PaymentUncheckedUpdateInputSchema ]),
}).strict() ;

export default PaymentUpsertArgsSchema;
