import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutMembersInputSchema } from './LibraryCreateWithoutMembersInputSchema';
import { LibraryUncheckedCreateWithoutMembersInputSchema } from './LibraryUncheckedCreateWithoutMembersInputSchema';
import { LibraryCreateOrConnectWithoutMembersInputSchema } from './LibraryCreateOrConnectWithoutMembersInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutMembersInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional()
}).strict();

export default LibraryCreateNestedOneWithoutMembersInputSchema;
