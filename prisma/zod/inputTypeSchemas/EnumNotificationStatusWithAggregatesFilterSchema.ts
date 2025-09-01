import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { NestedEnumNotificationStatusWithAggregatesFilterSchema } from './NestedEnumNotificationStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumNotificationStatusFilterSchema } from './NestedEnumNotificationStatusFilterSchema';

export const EnumNotificationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNotificationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationStatusSchema).optional(),
  in: z.lazy(() => NotificationStatusSchema).array().optional(),
  notIn: z.lazy(() => NotificationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationStatusSchema),z.lazy(() => NestedEnumNotificationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationStatusFilterSchema).optional()
}).strict();

export default EnumNotificationStatusWithAggregatesFilterSchema;
