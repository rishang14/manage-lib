import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutMembersInputSchema } from './LibraryCreateWithoutMembersInputSchema';
import { LibraryUncheckedCreateWithoutMembersInputSchema } from './LibraryUncheckedCreateWithoutMembersInputSchema';
import { LibraryCreateOrConnectWithoutMembersInputSchema } from './LibraryCreateOrConnectWithoutMembersInputSchema';
import { LibraryUpsertWithoutMembersInputSchema } from './LibraryUpsertWithoutMembersInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateToOneWithWhereWithoutMembersInputSchema } from './LibraryUpdateToOneWithWhereWithoutMembersInputSchema';
import { LibraryUpdateWithoutMembersInputSchema } from './LibraryUpdateWithoutMembersInputSchema';
import { LibraryUncheckedUpdateWithoutMembersInputSchema } from './LibraryUncheckedUpdateWithoutMembersInputSchema';

export const LibraryUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutMembersInputSchema),z.lazy(() => LibraryUpdateWithoutMembersInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
}).strict();

export default LibraryUpdateOneRequiredWithoutMembersNestedInputSchema;
