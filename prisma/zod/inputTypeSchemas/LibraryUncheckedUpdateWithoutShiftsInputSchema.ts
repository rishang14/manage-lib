import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUncheckedUpdateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutShiftsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUncheckedUpdateWithoutShiftsInputSchema;
