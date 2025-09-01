import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSentNotificationsInputSchema } from './UserCreateWithoutSentNotificationsInputSchema';
import { UserUncheckedCreateWithoutSentNotificationsInputSchema } from './UserUncheckedCreateWithoutSentNotificationsInputSchema';
import { UserCreateOrConnectWithoutSentNotificationsInputSchema } from './UserCreateOrConnectWithoutSentNotificationsInputSchema';
import { UserUpsertWithoutSentNotificationsInputSchema } from './UserUpsertWithoutSentNotificationsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema } from './UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema';
import { UserUpdateWithoutSentNotificationsInputSchema } from './UserUpdateWithoutSentNotificationsInputSchema';
import { UserUncheckedUpdateWithoutSentNotificationsInputSchema } from './UserUncheckedUpdateWithoutSentNotificationsInputSchema';

export const UserUpdateOneWithoutSentNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutSentNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSentNotificationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSentNotificationsInputSchema),z.lazy(() => UserUpdateWithoutSentNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentNotificationsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutSentNotificationsNestedInputSchema;
