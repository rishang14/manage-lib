import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LibraryCreateManyInputSchema: z.ZodType<Prisma.LibraryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LibraryCreateManyInputSchema;
