import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryCountOutputTypeSelectSchema } from './LibraryCountOutputTypeSelectSchema';

export const LibraryCountOutputTypeArgsSchema: z.ZodType<Prisma.LibraryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LibraryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LibraryCountOutputTypeSelectSchema;
