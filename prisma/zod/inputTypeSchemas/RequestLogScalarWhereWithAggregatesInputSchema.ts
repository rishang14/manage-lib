import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RequestLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RequestLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RequestLogScalarWhereWithAggregatesInputSchema),z.lazy(() => RequestLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestLogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestLogScalarWhereWithAggregatesInputSchema),z.lazy(() => RequestLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RequestLogScalarWhereWithAggregatesInputSchema;
