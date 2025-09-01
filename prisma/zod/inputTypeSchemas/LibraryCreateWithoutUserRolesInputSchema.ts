import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutLibraryInputSchema } from './UserCreateNestedOneWithoutLibraryInputSchema';
import { SeatCreateNestedManyWithoutLibraryInputSchema } from './SeatCreateNestedManyWithoutLibraryInputSchema';
import { MemberCreateNestedManyWithoutLibraryInputSchema } from './MemberCreateNestedManyWithoutLibraryInputSchema';
import { ShiftCreateNestedManyWithoutLibraryInputSchema } from './ShiftCreateNestedManyWithoutLibraryInputSchema';
import { NotificationCreateNestedManyWithoutLibraryInputSchema } from './NotificationCreateNestedManyWithoutLibraryInputSchema';

export const LibraryCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryCreateWithoutUserRolesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryCreateWithoutUserRolesInputSchema;
