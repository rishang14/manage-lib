import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutLibraryInputSchema } from './UserRoleCreateNestedManyWithoutLibraryInputSchema';
import { SeatCreateNestedManyWithoutLibraryInputSchema } from './SeatCreateNestedManyWithoutLibraryInputSchema';
import { MemberCreateNestedManyWithoutLibraryInputSchema } from './MemberCreateNestedManyWithoutLibraryInputSchema';
import { ShiftCreateNestedManyWithoutLibraryInputSchema } from './ShiftCreateNestedManyWithoutLibraryInputSchema';
import { NotificationCreateNestedManyWithoutLibraryInputSchema } from './NotificationCreateNestedManyWithoutLibraryInputSchema';

export const LibraryCreateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryCreateWithoutOwnerInputSchema;
