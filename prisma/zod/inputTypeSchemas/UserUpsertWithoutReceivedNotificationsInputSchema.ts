import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutReceivedNotificationsInputSchema } from './UserUpdateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedUpdateWithoutReceivedNotificationsInputSchema } from './UserUncheckedUpdateWithoutReceivedNotificationsInputSchema';
import { UserCreateWithoutReceivedNotificationsInputSchema } from './UserCreateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedCreateWithoutReceivedNotificationsInputSchema } from './UserUncheckedCreateWithoutReceivedNotificationsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutReceivedNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutReceivedNotificationsInputSchema;
