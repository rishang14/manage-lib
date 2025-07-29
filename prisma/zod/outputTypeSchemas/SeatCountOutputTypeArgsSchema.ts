import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatCountOutputTypeSelectSchema } from './SeatCountOutputTypeSelectSchema';

export const SeatCountOutputTypeArgsSchema: z.ZodType<Prisma.SeatCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SeatCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SeatCountOutputTypeSelectSchema;
