import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { SeatUncheckedCreateNestedManyWithoutLibraryInputSchema } from './SeatUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { MemberUncheckedCreateNestedManyWithoutLibraryInputSchema } from './MemberUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema } from './ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema';

export const LibraryUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryUncheckedCreateWithoutOwnerInputSchema;
