import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LibraryCreateManyOwnerInputSchema: z.ZodType<Prisma.LibraryCreateManyOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LibraryCreateManyOwnerInputSchema;
