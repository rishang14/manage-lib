import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema';
import { LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema } from './LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutReceiverNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutReceiverNestedInputSchema';

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutAccountsInputSchema;
