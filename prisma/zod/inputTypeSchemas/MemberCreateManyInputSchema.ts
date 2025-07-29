import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MemberCreateManyInputSchema: z.ZodType<Prisma.MemberCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string()
}).strict();

export default MemberCreateManyInputSchema;
