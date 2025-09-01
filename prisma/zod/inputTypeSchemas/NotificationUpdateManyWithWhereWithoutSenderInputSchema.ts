import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutSenderInputSchema } from './NotificationUncheckedUpdateManyWithoutSenderInputSchema';

export const NotificationUpdateManyWithWhereWithoutSenderInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutSenderInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutSenderInputSchema;
