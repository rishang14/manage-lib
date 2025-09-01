import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutLibraryNestedInputSchema } from './UserUpdateOneRequiredWithoutLibraryNestedInputSchema';
import { UserRoleUpdateManyWithoutLibraryNestedInputSchema } from './UserRoleUpdateManyWithoutLibraryNestedInputSchema';
import { MemberUpdateManyWithoutLibraryNestedInputSchema } from './MemberUpdateManyWithoutLibraryNestedInputSchema';
import { ShiftUpdateManyWithoutLibraryNestedInputSchema } from './ShiftUpdateManyWithoutLibraryNestedInputSchema';
import { NotificationUpdateManyWithoutLibraryNestedInputSchema } from './NotificationUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUpdateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutSeatsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUpdateWithoutSeatsInputSchema;
