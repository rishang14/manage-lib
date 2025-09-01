import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutReceiverInputSchema } from './NotificationCreateWithoutReceiverInputSchema';
import { NotificationUncheckedCreateWithoutReceiverInputSchema } from './NotificationUncheckedCreateWithoutReceiverInputSchema';

export const NotificationCreateOrConnectWithoutReceiverInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutReceiverInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutReceiverInputSchema;
