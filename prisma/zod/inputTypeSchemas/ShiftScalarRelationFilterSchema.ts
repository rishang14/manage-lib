import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereInputSchema } from './ShiftWhereInputSchema';

export const ShiftScalarRelationFilterSchema: z.ZodType<Prisma.ShiftScalarRelationFilter> = z.object({
  is: z.lazy(() => ShiftWhereInputSchema).optional(),
  isNot: z.lazy(() => ShiftWhereInputSchema).optional()
}).strict();

export default ShiftScalarRelationFilterSchema;
