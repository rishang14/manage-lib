import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutLibraryInputSchema } from './UserCreateNestedOneWithoutLibraryInputSchema';
import { UserRoleCreateNestedManyWithoutLibraryInputSchema } from './UserRoleCreateNestedManyWithoutLibraryInputSchema';
import { SeatCreateNestedManyWithoutLibraryInputSchema } from './SeatCreateNestedManyWithoutLibraryInputSchema';
import { MemberCreateNestedManyWithoutLibraryInputSchema } from './MemberCreateNestedManyWithoutLibraryInputSchema';
import { NotificationCreateNestedManyWithoutLibraryInputSchema } from './NotificationCreateNestedManyWithoutLibraryInputSchema';

export const LibraryCreateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateWithoutShiftsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryCreateWithoutShiftsInputSchema;
