import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMemberIdMonthCompoundUniqueInputSchema } from './PaymentMemberIdMonthCompoundUniqueInputSchema';
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MemberScalarRelationFilterSchema } from './MemberScalarRelationFilterSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const PaymentWhereUniqueInputSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    memberId_month: z.lazy(() => PaymentMemberIdMonthCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    memberId_month: z.lazy(() => PaymentMemberIdMonthCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  memberId_month: z.lazy(() => PaymentMemberIdMonthCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  month: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  paid: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
}).strict());

export default PaymentWhereUniqueInputSchema;
