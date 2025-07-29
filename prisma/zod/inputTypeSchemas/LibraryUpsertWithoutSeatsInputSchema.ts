import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryUpdateWithoutSeatsInputSchema } from './LibraryUpdateWithoutSeatsInputSchema';
import { LibraryUncheckedUpdateWithoutSeatsInputSchema } from './LibraryUncheckedUpdateWithoutSeatsInputSchema';
import { LibraryCreateWithoutSeatsInputSchema } from './LibraryCreateWithoutSeatsInputSchema';
import { LibraryUncheckedCreateWithoutSeatsInputSchema } from './LibraryUncheckedCreateWithoutSeatsInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryUpsertWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutSeatsInput> = z.object({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryUpsertWithoutSeatsInputSchema;
