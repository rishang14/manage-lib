import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { SeatUncheckedCreateNestedManyWithoutLibraryInputSchema } from './SeatUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema } from './ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema } from './NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema';

export const LibraryUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryUncheckedCreateWithoutMembersInputSchema;
