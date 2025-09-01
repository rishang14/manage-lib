import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutSenderInputSchema } from './NotificationCreateWithoutSenderInputSchema';
import { NotificationUncheckedCreateWithoutSenderInputSchema } from './NotificationUncheckedCreateWithoutSenderInputSchema';
import { NotificationCreateOrConnectWithoutSenderInputSchema } from './NotificationCreateOrConnectWithoutSenderInputSchema';
import { NotificationCreateManySenderInputEnvelopeSchema } from './NotificationCreateManySenderInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationUncheckedCreateNestedManyWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedCreateNestedManyWithoutSenderInputSchema;
