import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutSeatsInputSchema } from './LibraryCreateWithoutSeatsInputSchema';
import { LibraryUncheckedCreateWithoutSeatsInputSchema } from './LibraryUncheckedCreateWithoutSeatsInputSchema';

export const LibraryCreateOrConnectWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutSeatsInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutSeatsInputSchema;
