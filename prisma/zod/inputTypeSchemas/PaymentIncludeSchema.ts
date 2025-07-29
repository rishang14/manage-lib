import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"

export const PaymentIncludeSchema: z.ZodType<Prisma.PaymentInclude> = z.object({
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export default PaymentIncludeSchema;
