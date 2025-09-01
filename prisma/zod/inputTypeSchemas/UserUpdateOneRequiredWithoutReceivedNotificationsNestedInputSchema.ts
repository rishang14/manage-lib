import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutReceivedNotificationsInputSchema } from './UserCreateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedCreateWithoutReceivedNotificationsInputSchema } from './UserUncheckedCreateWithoutReceivedNotificationsInputSchema';
import { UserCreateOrConnectWithoutReceivedNotificationsInputSchema } from './UserCreateOrConnectWithoutReceivedNotificationsInputSchema';
import { UserUpsertWithoutReceivedNotificationsInputSchema } from './UserUpsertWithoutReceivedNotificationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema } from './UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema';
import { UserUpdateWithoutReceivedNotificationsInputSchema } from './UserUpdateWithoutReceivedNotificationsInputSchema';
import { UserUncheckedUpdateWithoutReceivedNotificationsInputSchema } from './UserUncheckedUpdateWithoutReceivedNotificationsInputSchema';

export const UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReceivedNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUpdateWithoutReceivedNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedNotificationsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema;
