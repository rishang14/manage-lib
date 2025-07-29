import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateWithoutLibraryInputSchema } from './SeatCreateWithoutLibraryInputSchema';
import { SeatUncheckedCreateWithoutLibraryInputSchema } from './SeatUncheckedCreateWithoutLibraryInputSchema';
import { SeatCreateOrConnectWithoutLibraryInputSchema } from './SeatCreateOrConnectWithoutLibraryInputSchema';
import { SeatCreateManyLibraryInputEnvelopeSchema } from './SeatCreateManyLibraryInputEnvelopeSchema';
import { SeatWhereUniqueInputSchema } from './SeatWhereUniqueInputSchema';

export const SeatUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedCreateNestedManyWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema),z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema),z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SeatUncheckedCreateNestedManyWithoutLibraryInputSchema;
