import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSentNotificationsInputSchema } from './UserCreateWithoutSentNotificationsInputSchema';
import { UserUncheckedCreateWithoutSentNotificationsInputSchema } from './UserUncheckedCreateWithoutSentNotificationsInputSchema';
import { UserCreateOrConnectWithoutSentNotificationsInputSchema } from './UserCreateOrConnectWithoutSentNotificationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSentNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSentNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSentNotificationsInputSchema;
