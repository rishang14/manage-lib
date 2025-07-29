import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUncheckedUpdateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutSeatsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUncheckedUpdateWithoutSeatsInputSchema;
