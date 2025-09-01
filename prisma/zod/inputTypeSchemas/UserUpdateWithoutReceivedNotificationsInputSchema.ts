import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AccountUpdateManyWithoutUserNestedInputSchema } from './AccountUpdateManyWithoutUserNestedInputSchema';
import { SessionUpdateManyWithoutUserNestedInputSchema } from './SessionUpdateManyWithoutUserNestedInputSchema';
import { UserRoleUpdateManyWithoutUserNestedInputSchema } from './UserRoleUpdateManyWithoutUserNestedInputSchema';
import { LibraryUpdateManyWithoutOwnerNestedInputSchema } from './LibraryUpdateManyWithoutOwnerNestedInputSchema';
import { NotificationUpdateManyWithoutSenderNestedInputSchema } from './NotificationUpdateManyWithoutSenderNestedInputSchema';

export const UserUpdateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutReceivedNotificationsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUpdateManyWithoutSenderNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutReceivedNotificationsInputSchema;
