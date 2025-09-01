import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutReceivedNotificationsInputSchema } from './UserCreateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedCreateWithoutReceivedNotificationsInputSchema } from './UserUncheckedCreateWithoutReceivedNotificationsInputSchema';

export const UserCreateOrConnectWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceivedNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutReceivedNotificationsInputSchema;
