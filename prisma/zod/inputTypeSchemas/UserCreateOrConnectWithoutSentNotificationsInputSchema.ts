import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSentNotificationsInputSchema } from './UserCreateWithoutSentNotificationsInputSchema';
import { UserUncheckedCreateWithoutSentNotificationsInputSchema } from './UserUncheckedCreateWithoutSentNotificationsInputSchema';

export const UserCreateOrConnectWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSentNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSentNotificationsInputSchema;
