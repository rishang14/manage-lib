import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryUpdateWithoutShiftsInputSchema } from './LibraryUpdateWithoutShiftsInputSchema';
import { LibraryUncheckedUpdateWithoutShiftsInputSchema } from './LibraryUncheckedUpdateWithoutShiftsInputSchema';
import { LibraryCreateWithoutShiftsInputSchema } from './LibraryCreateWithoutShiftsInputSchema';
import { LibraryUncheckedCreateWithoutShiftsInputSchema } from './LibraryUncheckedCreateWithoutShiftsInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryUpsertWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutShiftsInput> = z.object({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryUpsertWithoutShiftsInputSchema;
