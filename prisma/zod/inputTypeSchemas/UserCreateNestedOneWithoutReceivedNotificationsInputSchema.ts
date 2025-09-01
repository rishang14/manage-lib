import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutReceivedNotificationsInputSchema } from './UserCreateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedCreateWithoutReceivedNotificationsInputSchema } from './UserUncheckedCreateWithoutReceivedNotificationsInputSchema';
import { UserCreateOrConnectWithoutReceivedNotificationsInputSchema } from './UserCreateOrConnectWithoutReceivedNotificationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceivedNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutReceivedNotificationsInputSchema;
