import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationStatusSchema } from './NotificationStatusSchema';

export const NestedEnumNotificationStatusFilterSchema: z.ZodType<Prisma.NestedEnumNotificationStatusFilter> = z.object({
  equals: z.lazy(() => NotificationStatusSchema).optional(),
  in: z.lazy(() => NotificationStatusSchema).array().optional(),
  notIn: z.lazy(() => NotificationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationStatusSchema),z.lazy(() => NestedEnumNotificationStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumNotificationStatusFilterSchema;
