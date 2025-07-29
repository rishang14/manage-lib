import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftCreateWithoutLibraryInputSchema } from './ShiftCreateWithoutLibraryInputSchema';
import { ShiftUncheckedCreateWithoutLibraryInputSchema } from './ShiftUncheckedCreateWithoutLibraryInputSchema';
import { ShiftCreateOrConnectWithoutLibraryInputSchema } from './ShiftCreateOrConnectWithoutLibraryInputSchema';
import { ShiftCreateManyLibraryInputEnvelopeSchema } from './ShiftCreateManyLibraryInputEnvelopeSchema';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';

export const ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateNestedManyWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema),z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema),z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema;
