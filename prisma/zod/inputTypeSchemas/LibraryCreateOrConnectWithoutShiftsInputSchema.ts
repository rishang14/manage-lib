import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutShiftsInputSchema } from './LibraryCreateWithoutShiftsInputSchema';
import { LibraryUncheckedCreateWithoutShiftsInputSchema } from './LibraryUncheckedCreateWithoutShiftsInputSchema';

export const LibraryCreateOrConnectWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutShiftsInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutShiftsInputSchema;
