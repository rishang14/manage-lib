import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftUpdateWithoutLibraryInputSchema } from './ShiftUpdateWithoutLibraryInputSchema';
import { ShiftUncheckedUpdateWithoutLibraryInputSchema } from './ShiftUncheckedUpdateWithoutLibraryInputSchema';

export const ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpdateWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ShiftUpdateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema;
