import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftCreateWithoutLibraryInputSchema } from './ShiftCreateWithoutLibraryInputSchema';
import { ShiftUncheckedCreateWithoutLibraryInputSchema } from './ShiftUncheckedCreateWithoutLibraryInputSchema';
import { ShiftCreateOrConnectWithoutLibraryInputSchema } from './ShiftCreateOrConnectWithoutLibraryInputSchema';
import { ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema } from './ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema';
import { ShiftCreateManyLibraryInputEnvelopeSchema } from './ShiftCreateManyLibraryInputEnvelopeSchema';
import { ShiftWhereUniqueInputSchema } from './ShiftWhereUniqueInputSchema';
import { ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema } from './ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema';
import { ShiftUpdateManyWithWhereWithoutLibraryInputSchema } from './ShiftUpdateManyWithWhereWithoutLibraryInputSchema';
import { ShiftScalarWhereInputSchema } from './ShiftScalarWhereInputSchema';

export const ShiftUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.ShiftUpdateManyWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema),z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema),z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema),z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema),z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema),z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema),z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ShiftScalarWhereInputSchema),z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ShiftUpdateManyWithoutLibraryNestedInputSchema;
