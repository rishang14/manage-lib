import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereInputSchema } from './NotificationWhereInputSchema';
import { EnumNotificationTypeFilterSchema } from './EnumNotificationTypeFilterSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { EnumNotificationStatusFilterSchema } from './EnumNotificationStatusFilterSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableScalarRelationFilterSchema } from './UserNullableScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { LibraryNullableScalarRelationFilterSchema } from './LibraryNullableScalarRelationFilterSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonNullableFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumNotificationStatusFilterSchema),z.lazy(() => NotificationStatusSchema) ]).optional(),
  senderId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  receiverId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sender: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  receiver: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  library: z.union([ z.lazy(() => LibraryNullableScalarRelationFilterSchema),z.lazy(() => LibraryWhereInputSchema) ]).optional().nullable(),
}).strict());

export default NotificationWhereUniqueInputSchema;
