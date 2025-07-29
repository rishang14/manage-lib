import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftCreateWithoutLibraryInputSchema } from './ShiftCreateWithoutLibraryInputSchema';
import { ShiftUncheckedCreateWithoutLibraryInputSchema } from './ShiftUncheckedCreateWithoutLibraryInputSchema';

export const ShiftCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default ShiftCreateOrConnectWithoutLibraryInputSchema;
