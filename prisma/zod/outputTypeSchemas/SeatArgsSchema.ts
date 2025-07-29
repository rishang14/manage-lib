import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatSelectSchema } from '../inputTypeSchemas/SeatSelectSchema';
import { SeatIncludeSchema } from '../inputTypeSchemas/SeatIncludeSchema';

export const SeatArgsSchema: z.ZodType<Prisma.SeatDefaultArgs> = z.object({
  select: z.lazy(() => SeatSelectSchema).optional(),
  include: z.lazy(() => SeatIncludeSchema).optional(),
}).strict();

export default SeatArgsSchema;
