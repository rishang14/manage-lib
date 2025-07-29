import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryUpdateWithoutMembersInputSchema } from './LibraryUpdateWithoutMembersInputSchema';
import { LibraryUncheckedUpdateWithoutMembersInputSchema } from './LibraryUncheckedUpdateWithoutMembersInputSchema';

export const LibraryUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export default LibraryUpdateToOneWithWhereWithoutMembersInputSchema;
