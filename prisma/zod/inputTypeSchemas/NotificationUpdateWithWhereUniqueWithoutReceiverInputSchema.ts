import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutReceiverInputSchema } from './NotificationUpdateWithoutReceiverInputSchema';
import { NotificationUncheckedUpdateWithoutReceiverInputSchema } from './NotificationUncheckedUpdateWithoutReceiverInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutReceiverInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutReceiverInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema;
