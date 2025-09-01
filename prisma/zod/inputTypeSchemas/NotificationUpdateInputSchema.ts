import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationTypeFieldUpdateOperationsInputSchema } from './EnumNotificationTypeFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { EnumNotificationStatusFieldUpdateOperationsInputSchema } from './EnumNotificationStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutSentNotificationsNestedInputSchema } from './UserUpdateOneWithoutSentNotificationsNestedInputSchema';
import { UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema } from './UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema';
import { LibraryUpdateOneWithoutNotificationsNestedInputSchema } from './LibraryUpdateOneWithoutNotificationsNestedInputSchema';

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.union([ z.lazy(() => NotificationStatusSchema),z.lazy(() => EnumNotificationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneWithoutSentNotificationsNestedInputSchema).optional(),
  receiver: z.lazy(() => UserUpdateOneRequiredWithoutReceivedNotificationsNestedInputSchema).optional(),
  library: z.lazy(() => LibraryUpdateOneWithoutNotificationsNestedInputSchema).optional()
}).strict();

export default NotificationUpdateInputSchema;
