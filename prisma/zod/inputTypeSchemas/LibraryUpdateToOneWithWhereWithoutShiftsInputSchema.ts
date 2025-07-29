import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryUpdateWithoutShiftsInputSchema } from './LibraryUpdateWithoutShiftsInputSchema';
import { LibraryUncheckedUpdateWithoutShiftsInputSchema } from './LibraryUncheckedUpdateWithoutShiftsInputSchema';

export const LibraryUpdateToOneWithWhereWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutShiftsInput> = z.object({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]),
}).strict();

export default LibraryUpdateToOneWithWhereWithoutShiftsInputSchema;
