import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryUpdateWithoutMembersInputSchema } from './LibraryUpdateWithoutMembersInputSchema';
import { LibraryUncheckedUpdateWithoutMembersInputSchema } from './LibraryUncheckedUpdateWithoutMembersInputSchema';
import { LibraryCreateWithoutMembersInputSchema } from './LibraryCreateWithoutMembersInputSchema';
import { LibraryUncheckedCreateWithoutMembersInputSchema } from './LibraryUncheckedCreateWithoutMembersInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryUpsertWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutMembersInput> = z.object({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryUpsertWithoutMembersInputSchema;
