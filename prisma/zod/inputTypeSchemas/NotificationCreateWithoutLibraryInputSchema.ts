import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { UserCreateNestedOneWithoutSentNotificationsInputSchema } from './UserCreateNestedOneWithoutSentNotificationsInputSchema';
import { UserCreateNestedOneWithoutReceivedNotificationsInputSchema } from './UserCreateNestedOneWithoutReceivedNotificationsInputSchema';

export const NotificationCreateWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationCreateWithoutLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.lazy(() => NotificationStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentNotificationsInputSchema).optional(),
  receiver: z.lazy(() => UserCreateNestedOneWithoutReceivedNotificationsInputSchema)
}).strict();

export default NotificationCreateWithoutLibraryInputSchema;
