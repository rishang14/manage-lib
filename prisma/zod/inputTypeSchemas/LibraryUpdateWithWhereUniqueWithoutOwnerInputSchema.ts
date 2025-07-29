import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateWithoutOwnerInputSchema } from './LibraryUpdateWithoutOwnerInputSchema';
import { LibraryUncheckedUpdateWithoutOwnerInputSchema } from './LibraryUncheckedUpdateWithoutOwnerInputSchema';

export const LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export default LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema;
