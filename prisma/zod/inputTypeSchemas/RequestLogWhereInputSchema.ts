import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RequestLogWhereInputSchema: z.ZodType<Prisma.RequestLogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RequestLogWhereInputSchema),z.lazy(() => RequestLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestLogWhereInputSchema),z.lazy(() => RequestLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RequestLogWhereInputSchema;
