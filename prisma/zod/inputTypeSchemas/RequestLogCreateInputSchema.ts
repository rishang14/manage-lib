import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RequestLogCreateInputSchema: z.ZodType<Prisma.RequestLogCreateInput> = z.object({
  id: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default RequestLogCreateInputSchema;
