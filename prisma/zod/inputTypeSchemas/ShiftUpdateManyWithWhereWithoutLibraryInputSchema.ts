import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftScalarWhereInputSchema } from './ShiftScalarWhereInputSchema';
import { ShiftUpdateManyMutationInputSchema } from './ShiftUpdateManyMutationInputSchema';
import { ShiftUncheckedUpdateManyWithoutLibraryInputSchema } from './ShiftUncheckedUpdateManyWithoutLibraryInputSchema';

export const ShiftUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpdateManyWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => ShiftScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ShiftUpdateManyMutationInputSchema),z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryInputSchema) ]),
}).strict();

export default ShiftUpdateManyWithWhereWithoutLibraryInputSchema;
