import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutReceiverInputSchema } from './NotificationUncheckedUpdateManyWithoutReceiverInputSchema';

export const NotificationUpdateManyWithWhereWithoutReceiverInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutReceiverInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutReceiverInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutReceiverInputSchema;
