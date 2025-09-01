import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutReceiverInputSchema } from './NotificationUpdateWithoutReceiverInputSchema';
import { NotificationUncheckedUpdateWithoutReceiverInputSchema } from './NotificationUncheckedUpdateWithoutReceiverInputSchema';
import { NotificationCreateWithoutReceiverInputSchema } from './NotificationCreateWithoutReceiverInputSchema';
import { NotificationUncheckedCreateWithoutReceiverInputSchema } from './NotificationUncheckedCreateWithoutReceiverInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutReceiverInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutReceiverInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema;
