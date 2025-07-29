import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MemberCountOutputTypeSelectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
  payments: z.boolean().optional(),
}).strict();

export default MemberCountOutputTypeSelectSchema;
