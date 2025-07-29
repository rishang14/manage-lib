import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { MemberUncheckedCreateNestedManyWithoutLibraryInputSchema } from './MemberUncheckedCreateNestedManyWithoutLibraryInputSchema';
import { ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema } from './ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema';

export const LibraryUncheckedCreateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutSeatsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional()
}).strict();

export default LibraryUncheckedCreateWithoutSeatsInputSchema;
