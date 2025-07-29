import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShiftCountOutputTypeSelectSchema } from './ShiftCountOutputTypeSelectSchema';

export const ShiftCountOutputTypeArgsSchema: z.ZodType<Prisma.ShiftCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ShiftCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ShiftCountOutputTypeSelectSchema;
