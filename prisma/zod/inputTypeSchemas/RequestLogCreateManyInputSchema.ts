import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RequestLogCreateManyInputSchema: z.ZodType<Prisma.RequestLogCreateManyInput> = z.object({
  id: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default RequestLogCreateManyInputSchema;
