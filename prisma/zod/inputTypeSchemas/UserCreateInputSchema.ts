import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { UserRoleCreateNestedManyWithoutUserInputSchema } from './UserRoleCreateNestedManyWithoutUserInputSchema';
import { LibraryCreateNestedManyWithoutOwnerInputSchema } from './LibraryCreateNestedManyWithoutOwnerInputSchema';
import { NotificationCreateNestedManyWithoutSenderInputSchema } from './NotificationCreateNestedManyWithoutSenderInputSchema';
import { NotificationCreateNestedManyWithoutReceiverInputSchema } from './NotificationCreateNestedManyWithoutReceiverInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryCreateNestedManyWithoutOwnerInputSchema).optional(),
  sentNotifications: z.lazy(() => NotificationCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedNotifications: z.lazy(() => NotificationCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
