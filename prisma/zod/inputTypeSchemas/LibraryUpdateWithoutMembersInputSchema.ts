import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutLibraryNestedInputSchema } from './UserUpdateOneRequiredWithoutLibraryNestedInputSchema';
import { UserRoleUpdateManyWithoutLibraryNestedInputSchema } from './UserRoleUpdateManyWithoutLibraryNestedInputSchema';
import { SeatUpdateManyWithoutLibraryNestedInputSchema } from './SeatUpdateManyWithoutLibraryNestedInputSchema';
import { ShiftUpdateManyWithoutLibraryNestedInputSchema } from './ShiftUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUpdateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutMembersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUpdateWithoutMembersInputSchema;
