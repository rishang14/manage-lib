import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftUpdateWithoutLibraryInputSchema } from './ShiftUpdateWithoutLibraryInputSchema';
import { ShiftUncheckedUpdateWithoutLibraryInputSchema } from './ShiftUncheckedUpdateWithoutLibraryInputSchema';
import { ShiftCreateWithoutLibraryInputSchema } from './ShiftCreateWithoutLibraryInputSchema';
import { ShiftUncheckedCreateWithoutLibraryInputSchema } from './ShiftUncheckedCreateWithoutLibraryInputSchema';

export const ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpsertWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ShiftUpdateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema;
