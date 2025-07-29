import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatUpdateWithoutLibraryInputSchema } from './SeatUpdateWithoutLibraryInputSchema';
import { SeatUncheckedUpdateWithoutLibraryInputSchema } from './SeatUncheckedUpdateWithoutLibraryInputSchema';

export const SeatUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SeatUpdateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default SeatUpdateWithWhereUniqueWithoutLibraryInputSchema;
