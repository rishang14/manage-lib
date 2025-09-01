import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutLibraryInputSchema } from './UserCreateNestedOneWithoutLibraryInputSchema';
import { UserRoleCreateNestedManyWithoutLibraryInputSchema } from './UserRoleCreateNestedManyWithoutLibraryInputSchema';
import { SeatCreateNestedManyWithoutLibraryInputSchema } from './SeatCreateNestedManyWithoutLibraryInputSchema';
import { ShiftCreateNestedManyWithoutLibraryInputSchema } from './ShiftCreateNestedManyWithoutLibraryInputSchema';
import { NotificationCreateNestedManyWithoutLibraryInputSchema } from './NotificationCreateNestedManyWithoutLibraryInputSchema';

export const LibraryCreateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryCreateWithoutMembersInputSchema;
