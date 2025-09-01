import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutReceivedNotificationsInputSchema } from './UserUpdateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedUpdateWithoutReceivedNotificationsInputSchema } from './UserUncheckedUpdateWithoutReceivedNotificationsInputSchema';

export const UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReceivedNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema;
