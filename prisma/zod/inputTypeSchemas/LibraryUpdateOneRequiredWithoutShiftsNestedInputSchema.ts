import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutShiftsInputSchema } from './LibraryCreateWithoutShiftsInputSchema';
import { LibraryUncheckedCreateWithoutShiftsInputSchema } from './LibraryUncheckedCreateWithoutShiftsInputSchema';
import { LibraryCreateOrConnectWithoutShiftsInputSchema } from './LibraryCreateOrConnectWithoutShiftsInputSchema';
import { LibraryUpsertWithoutShiftsInputSchema } from './LibraryUpsertWithoutShiftsInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateToOneWithWhereWithoutShiftsInputSchema } from './LibraryUpdateToOneWithWhereWithoutShiftsInputSchema';
import { LibraryUpdateWithoutShiftsInputSchema } from './LibraryUpdateWithoutShiftsInputSchema';
import { LibraryUncheckedUpdateWithoutShiftsInputSchema } from './LibraryUncheckedUpdateWithoutShiftsInputSchema';

export const LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutShiftsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutShiftsInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutShiftsInputSchema),z.lazy(() => LibraryUpdateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]).optional(),
}).strict();

export default LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema;
