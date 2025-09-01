import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutSenderInputSchema } from './NotificationUpdateWithoutSenderInputSchema';
import { NotificationUncheckedUpdateWithoutSenderInputSchema } from './NotificationUncheckedUpdateWithoutSenderInputSchema';
import { NotificationCreateWithoutSenderInputSchema } from './NotificationCreateWithoutSenderInputSchema';
import { NotificationUncheckedCreateWithoutSenderInputSchema } from './NotificationUncheckedCreateWithoutSenderInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutSenderInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutSenderInputSchema;
