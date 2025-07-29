import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatScalarWhereInputSchema } from './SeatScalarWhereInputSchema';
import { SeatUpdateManyMutationInputSchema } from './SeatUpdateManyMutationInputSchema';
import { SeatUncheckedUpdateManyWithoutLibraryInputSchema } from './SeatUncheckedUpdateManyWithoutLibraryInputSchema';

export const SeatUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateManyWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => SeatScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SeatUpdateManyMutationInputSchema),z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryInputSchema) ]),
}).strict();

export default SeatUpdateManyWithWhereWithoutLibraryInputSchema;
