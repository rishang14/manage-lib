import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentCreateWithoutMemberInputSchema } from './PaymentCreateWithoutMemberInputSchema';
import { PaymentUncheckedCreateWithoutMemberInputSchema } from './PaymentUncheckedCreateWithoutMemberInputSchema';
import { PaymentCreateOrConnectWithoutMemberInputSchema } from './PaymentCreateOrConnectWithoutMemberInputSchema';
import { PaymentCreateManyMemberInputEnvelopeSchema } from './PaymentCreateManyMemberInputEnvelopeSchema';
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema';

export const PaymentCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutMemberInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PaymentCreateNestedManyWithoutMemberInputSchema;
