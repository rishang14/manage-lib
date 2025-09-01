import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSentNotificationsInputSchema } from './UserUpdateWithoutSentNotificationsInputSchema';
import { UserUncheckedUpdateWithoutSentNotificationsInputSchema } from './UserUncheckedUpdateWithoutSentNotificationsInputSchema';

export const UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSentNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema;
