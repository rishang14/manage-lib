import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateWithoutOwnerInputSchema } from './LibraryUpdateWithoutOwnerInputSchema';
import { LibraryUncheckedUpdateWithoutOwnerInputSchema } from './LibraryUncheckedUpdateWithoutOwnerInputSchema';
import { LibraryCreateWithoutOwnerInputSchema } from './LibraryCreateWithoutOwnerInputSchema';
import { LibraryUncheckedCreateWithoutOwnerInputSchema } from './LibraryUncheckedCreateWithoutOwnerInputSchema';

export const LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LibraryUpdateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema;
