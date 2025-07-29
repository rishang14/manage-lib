import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutMembersInputSchema } from './LibraryCreateWithoutMembersInputSchema';
import { LibraryUncheckedCreateWithoutMembersInputSchema } from './LibraryUncheckedCreateWithoutMembersInputSchema';

export const LibraryCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutMembersInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutMembersInputSchema;
