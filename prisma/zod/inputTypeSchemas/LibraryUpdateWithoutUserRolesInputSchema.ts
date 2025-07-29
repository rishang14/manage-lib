import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutLibraryNestedInputSchema } from './UserUpdateOneRequiredWithoutLibraryNestedInputSchema';
import { SeatUpdateManyWithoutLibraryNestedInputSchema } from './SeatUpdateManyWithoutLibraryNestedInputSchema';
import { MemberUpdateManyWithoutLibraryNestedInputSchema } from './MemberUpdateManyWithoutLibraryNestedInputSchema';
import { ShiftUpdateManyWithoutLibraryNestedInputSchema } from './ShiftUpdateManyWithoutLibraryNestedInputSchema';

export const LibraryUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutUserRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional()
}).strict();

export default LibraryUpdateWithoutUserRolesInputSchema;
