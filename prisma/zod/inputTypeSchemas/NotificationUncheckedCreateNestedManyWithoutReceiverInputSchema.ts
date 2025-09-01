import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutReceiverInputSchema } from './NotificationCreateWithoutReceiverInputSchema';
import { NotificationUncheckedCreateWithoutReceiverInputSchema } from './NotificationUncheckedCreateWithoutReceiverInputSchema';
import { NotificationCreateOrConnectWithoutReceiverInputSchema } from './NotificationCreateOrConnectWithoutReceiverInputSchema';
import { NotificationCreateManyReceiverInputEnvelopeSchema } from './NotificationCreateManyReceiverInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationUncheckedCreateNestedManyWithoutReceiverInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutReceiverInputSchema),z.lazy(() => NotificationCreateWithoutReceiverInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyReceiverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedCreateNestedManyWithoutReceiverInputSchema;
