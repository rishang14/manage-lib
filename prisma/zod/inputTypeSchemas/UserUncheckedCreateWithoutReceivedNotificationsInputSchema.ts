import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInputSchema';
import { LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema } from './LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema';
import { NotificationUncheckedCreateNestedManyWithoutSenderInputSchema } from './NotificationUncheckedCreateNestedManyWithoutSenderInputSchema';

export const UserUncheckedCreateWithoutReceivedNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReceivedNotificationsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutSenderInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutReceivedNotificationsInputSchema;
