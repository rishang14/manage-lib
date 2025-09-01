import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatUncheckedCreateNestedManyWithoutLibraryInputSchema } from './SeatUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { MemberUncheckedCreateNestedManyWithoutLibraryInputSchema } from './MemberUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema } from './ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema } from './NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema';

export const LibraryUncheckedCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutUserRolesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryUncheckedCreateWithoutUserRolesInputSchema;
