import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereInputSchema } from './ShiftWhereInputSchema';

export const ShiftListRelationFilterSchema: z.ZodType<Prisma.ShiftListRelationFilter> = z.object({
  every: z.lazy(() => ShiftWhereInputSchema).optional(),
  some: z.lazy(() => ShiftWhereInputSchema).optional(),
  none: z.lazy(() => ShiftWhereInputSchema).optional()
}).strict();

export default ShiftListRelationFilterSchema;
