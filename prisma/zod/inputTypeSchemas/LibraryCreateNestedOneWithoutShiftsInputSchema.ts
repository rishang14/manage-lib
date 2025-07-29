import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutShiftsInputSchema } from './LibraryCreateWithoutShiftsInputSchema';
import { LibraryUncheckedCreateWithoutShiftsInputSchema } from './LibraryUncheckedCreateWithoutShiftsInputSchema';
import { LibraryCreateOrConnectWithoutShiftsInputSchema } from './LibraryCreateOrConnectWithoutShiftsInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryCreateNestedOneWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutShiftsInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional()
}).strict();

export default LibraryCreateNestedOneWithoutShiftsInputSchema;
