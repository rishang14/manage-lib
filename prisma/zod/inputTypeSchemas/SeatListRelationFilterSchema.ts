import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';

export const SeatListRelationFilterSchema: z.ZodType<Prisma.SeatListRelationFilter> = z.object({
  every: z.lazy(() => SeatWhereInputSchema).optional(),
  some: z.lazy(() => SeatWhereInputSchema).optional(),
  none: z.lazy(() => SeatWhereInputSchema).optional()
}).strict();

export default SeatListRelationFilterSchema;
