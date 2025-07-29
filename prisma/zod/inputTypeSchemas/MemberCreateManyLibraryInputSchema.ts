import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MemberCreateManyLibraryInputSchema: z.ZodType<Prisma.MemberCreateManyLibraryInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();

export default MemberCreateManyLibraryInputSchema;
