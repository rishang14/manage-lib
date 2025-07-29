import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutOwnerInputSchema } from './LibraryCreateWithoutOwnerInputSchema';
import { LibraryUncheckedCreateWithoutOwnerInputSchema } from './LibraryUncheckedCreateWithoutOwnerInputSchema';
import { LibraryCreateOrConnectWithoutOwnerInputSchema } from './LibraryCreateOrConnectWithoutOwnerInputSchema';
import { LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema } from './LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { LibraryCreateManyOwnerInputEnvelopeSchema } from './LibraryCreateManyOwnerInputEnvelopeSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema } from './LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { LibraryUpdateManyWithWhereWithoutOwnerInputSchema } from './LibraryUpdateManyWithWhereWithoutOwnerInputSchema';
import { LibraryScalarWhereInputSchema } from './LibraryScalarWhereInputSchema';

export const LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema),z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema),z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema),z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema),z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema),z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LibraryScalarWhereInputSchema),z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema;
