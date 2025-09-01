import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutLibraryInputSchema } from './UserCreateNestedOneWithoutLibraryInputSchema';
import { UserRoleCreateNestedManyWithoutLibraryInputSchema } from './UserRoleCreateNestedManyWithoutLibraryInputSchema';
import { MemberCreateNestedManyWithoutLibraryInputSchema } from './MemberCreateNestedManyWithoutLibraryInputSchema';
import { ShiftCreateNestedManyWithoutLibraryInputSchema } from './ShiftCreateNestedManyWithoutLibraryInputSchema';
import { NotificationCreateNestedManyWithoutLibraryInputSchema } from './NotificationCreateNestedManyWithoutLibraryInputSchema';

export const LibraryCreateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateWithoutSeatsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryCreateWithoutSeatsInputSchema;
