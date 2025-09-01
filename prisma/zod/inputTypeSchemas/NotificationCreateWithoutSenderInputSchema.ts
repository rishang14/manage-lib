import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { UserCreateNestedOneWithoutReceivedNotificationsInputSchema } from './UserCreateNestedOneWithoutReceivedNotificationsInputSchema';
import { LibraryCreateNestedOneWithoutNotificationsInputSchema } from './LibraryCreateNestedOneWithoutNotificationsInputSchema';

export const NotificationCreateWithoutSenderInputSchema: z.ZodType<Prisma.NotificationCreateWithoutSenderInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.lazy(() => NotificationStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  receiver: z.lazy(() => UserCreateNestedOneWithoutReceivedNotificationsInputSchema),
  library: z.lazy(() => LibraryCreateNestedOneWithoutNotificationsInputSchema).optional()
}).strict();

export default NotificationCreateWithoutSenderInputSchema;
