import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const ShiftScalarWhereInputSchema: z.ZodType<Prisma.ShiftScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ShiftScalarWhereInputSchema),z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftScalarWhereInputSchema),z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ShiftScalarWhereInputSchema;
