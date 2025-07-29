import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibrarySelectSchema } from '../inputTypeSchemas/LibrarySelectSchema';
import { LibraryIncludeSchema } from '../inputTypeSchemas/LibraryIncludeSchema';

export const LibraryArgsSchema: z.ZodType<Prisma.LibraryDefaultArgs> = z.object({
  select: z.lazy(() => LibrarySelectSchema).optional(),
  include: z.lazy(() => LibraryIncludeSchema).optional(),
}).strict();

export default LibraryArgsSchema;
