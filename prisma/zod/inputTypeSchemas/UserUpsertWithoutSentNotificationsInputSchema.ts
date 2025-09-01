import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSentNotificationsInputSchema } from './UserUpdateWithoutSentNotificationsInputSchema';
import { UserUncheckedUpdateWithoutSentNotificationsInputSchema } from './UserUncheckedUpdateWithoutSentNotificationsInputSchema';
import { UserCreateWithoutSentNotificationsInputSchema } from './UserCreateWithoutSentNotificationsInputSchema';
import { UserUncheckedCreateWithoutSentNotificationsInputSchema } from './UserUncheckedCreateWithoutSentNotificationsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSentNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSentNotificationsInputSchema;
