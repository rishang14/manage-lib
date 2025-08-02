import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RequestLogSelectSchema: z.ZodType<Prisma.RequestLogSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export default RequestLogSelectSchema;
