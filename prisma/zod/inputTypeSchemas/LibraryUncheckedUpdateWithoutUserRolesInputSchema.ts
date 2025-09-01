import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUncheckedUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutUserRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUncheckedUpdateWithoutUserRolesInputSchema;
