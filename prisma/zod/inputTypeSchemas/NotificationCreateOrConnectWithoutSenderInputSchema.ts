import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutSenderInputSchema } from './NotificationCreateWithoutSenderInputSchema';
import { NotificationUncheckedCreateWithoutSenderInputSchema } from './NotificationUncheckedCreateWithoutSenderInputSchema';

export const NotificationCreateOrConnectWithoutSenderInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutSenderInputSchema;
