import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutSenderInputSchema } from './NotificationUpdateWithoutSenderInputSchema';
import { NotificationUncheckedUpdateWithoutSenderInputSchema } from './NotificationUncheckedUpdateWithoutSenderInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutSenderInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutSenderInputSchema;
