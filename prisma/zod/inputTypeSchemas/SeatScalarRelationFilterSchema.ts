import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';

export const SeatScalarRelationFilterSchema: z.ZodType<Prisma.SeatScalarRelationFilter> = z.object({
  is: z.lazy(() => SeatWhereInputSchema).optional(),
  isNot: z.lazy(() => SeatWhereInputSchema).optional()
}).strict();

export default SeatScalarRelationFilterSchema;
