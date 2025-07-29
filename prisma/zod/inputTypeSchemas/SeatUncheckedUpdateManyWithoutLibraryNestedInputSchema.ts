import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateWithoutLibraryInputSchema } from './SeatCreateWithoutLibraryInputSchema';
import { SeatUncheckedCreateWithoutLibraryInputSchema } from './SeatUncheckedCreateWithoutLibraryInputSchema';
import { SeatCreateOrConnectWithoutLibraryInputSchema } from './SeatCreateOrConnectWithoutLibraryInputSchema';
import { SeatUpsertWithWhereUniqueWithoutLibraryInputSchema } from './SeatUpsertWithWhereUniqueWithoutLibraryInputSchema';
import { SeatCreateManyLibraryInputEnvelopeSchema } from './SeatCreateManyLibraryInputEnvelopeSchema';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';
import { SeatUpdateWithWhereUniqueWithoutLibraryInputSchema } from './SeatUpdateWithWhereUniqueWithoutLibraryInputSchema';
import { SeatUpdateManyWithWhereWithoutLibraryInputSchema } from './SeatUpdateManyWithWhereWithoutLibraryInputSchema';
import { SeatScalarWhereInputSchema } from './SeatScalarWhereInputSchema';

export const SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateManyWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema),z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SeatWhereUniqueInputSchema),z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema),z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SeatWhereUniqueInputSchema),z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema),z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema),z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SeatScalarWhereInputSchema),z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema;
