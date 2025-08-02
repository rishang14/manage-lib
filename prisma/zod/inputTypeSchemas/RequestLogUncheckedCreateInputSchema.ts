import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RequestLogUncheckedCreateInputSchema: z.ZodType<Prisma.RequestLogUncheckedCreateInput> = z.object({
  id: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default RequestLogUncheckedCreateInputSchema;
