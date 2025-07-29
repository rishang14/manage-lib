import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutSeatsInputSchema } from './LibraryCreateWithoutSeatsInputSchema';
import { LibraryUncheckedCreateWithoutSeatsInputSchema } from './LibraryUncheckedCreateWithoutSeatsInputSchema';
import { LibraryCreateOrConnectWithoutSeatsInputSchema } from './LibraryCreateOrConnectWithoutSeatsInputSchema';
import { LibraryUpsertWithoutSeatsInputSchema } from './LibraryUpsertWithoutSeatsInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateToOneWithWhereWithoutSeatsInputSchema } from './LibraryUpdateToOneWithWhereWithoutSeatsInputSchema';
import { LibraryUpdateWithoutSeatsInputSchema } from './LibraryUpdateWithoutSeatsInputSchema';
import { LibraryUncheckedUpdateWithoutSeatsInputSchema } from './LibraryUncheckedUpdateWithoutSeatsInputSchema';

export const LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutSeatsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutSeatsInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutSeatsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutSeatsInputSchema),z.lazy(() => LibraryUpdateWithoutSeatsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]).optional(),
}).strict();

export default LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema;
