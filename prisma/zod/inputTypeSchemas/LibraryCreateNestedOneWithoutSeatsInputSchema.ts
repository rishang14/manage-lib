import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutSeatsInputSchema } from './LibraryCreateWithoutSeatsInputSchema';
import { LibraryUncheckedCreateWithoutSeatsInputSchema } from './LibraryUncheckedCreateWithoutSeatsInputSchema';
import { LibraryCreateOrConnectWithoutSeatsInputSchema } from './LibraryCreateOrConnectWithoutSeatsInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryCreateNestedOneWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutSeatsInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutSeatsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional()
}).strict();

export default LibraryCreateNestedOneWithoutSeatsInputSchema;
