import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryUpdateWithoutSeatsInputSchema } from './LibraryUpdateWithoutSeatsInputSchema';
import { LibraryUncheckedUpdateWithoutSeatsInputSchema } from './LibraryUncheckedUpdateWithoutSeatsInputSchema';

export const LibraryUpdateToOneWithWhereWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutSeatsInput> = z.object({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]),
}).strict();

export default LibraryUpdateToOneWithWhereWithoutSeatsInputSchema;
