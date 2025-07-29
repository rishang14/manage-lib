import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { SeatUncheckedCreateNestedManyWithoutLibraryInputSchema } from './SeatUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { MemberUncheckedCreateNestedManyWithoutLibraryInputSchema } from './MemberUncheckedCreateNestedManyWithoutLibraryInputSchema';

export const LibraryUncheckedCreateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutShiftsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryUncheckedCreateWithoutShiftsInputSchema;
