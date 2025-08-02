import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestLogWhereInputSchema } from './RequestLogWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RequestLogWhereUniqueInputSchema: z.ZodType<Prisma.RequestLogWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => RequestLogWhereInputSchema),z.lazy(() => RequestLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestLogWhereInputSchema),z.lazy(() => RequestLogWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default RequestLogWhereUniqueInputSchema;
