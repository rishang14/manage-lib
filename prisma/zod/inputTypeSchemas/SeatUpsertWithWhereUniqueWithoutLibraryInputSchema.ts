import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatUpdateWithoutLibraryInputSchema } from './SeatUpdateWithoutLibraryInputSchema';
import { SeatUncheckedUpdateWithoutLibraryInputSchema } from './SeatUncheckedUpdateWithoutLibraryInputSchema';
import { SeatCreateWithoutLibraryInputSchema } from './SeatCreateWithoutLibraryInputSchema';
import { SeatUncheckedCreateWithoutLibraryInputSchema } from './SeatUncheckedCreateWithoutLibraryInputSchema';

export const SeatUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpsertWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SeatUpdateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default SeatUpsertWithWhereUniqueWithoutLibraryInputSchema;
