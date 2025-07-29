import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftSelectSchema } from '../inputTypeSchemas/ShiftSelectSchema';
import { ShiftIncludeSchema } from '../inputTypeSchemas/ShiftIncludeSchema';

export const ShiftArgsSchema: z.ZodType<Prisma.ShiftDefaultArgs> = z.object({
  select: z.lazy(() => ShiftSelectSchema).optional(),
  include: z.lazy(() => ShiftIncludeSchema).optional(),
}).strict();

export default ShiftArgsSchema;
