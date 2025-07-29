import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatCreateWithoutLibraryInputSchema } from './SeatCreateWithoutLibraryInputSchema';
import { SeatUncheckedCreateWithoutLibraryInputSchema } from './SeatUncheckedCreateWithoutLibraryInputSchema';

export const SeatCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.SeatCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default SeatCreateOrConnectWithoutLibraryInputSchema;
