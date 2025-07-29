import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentCreateWithoutMemberInputSchema } from './PaymentCreateWithoutMemberInputSchema';
import { PaymentUncheckedCreateWithoutMemberInputSchema } from './PaymentUncheckedCreateWithoutMemberInputSchema';
import { PaymentCreateOrConnectWithoutMemberInputSchema } from './PaymentCreateOrConnectWithoutMemberInputSchema';
import { PaymentUpsertWithWhereUniqueWithoutMemberInputSchema } from './PaymentUpsertWithWhereUniqueWithoutMemberInputSchema';
import { PaymentCreateManyMemberInputEnvelopeSchema } from './PaymentCreateManyMemberInputEnvelopeSchema';
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema';
import { PaymentUpdateWithWhereUniqueWithoutMemberInputSchema } from './PaymentUpdateWithWhereUniqueWithoutMemberInputSchema';
import { PaymentUpdateManyWithWhereWithoutMemberInputSchema } from './PaymentUpdateManyWithWhereWithoutMemberInputSchema';
import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema';

export const PaymentUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutMemberNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema),z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PaymentUpdateManyWithoutMemberNestedInputSchema;
