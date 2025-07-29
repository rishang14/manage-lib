import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutOwnerInputSchema } from './LibraryCreateWithoutOwnerInputSchema';
import { LibraryUncheckedCreateWithoutOwnerInputSchema } from './LibraryUncheckedCreateWithoutOwnerInputSchema';
import { LibraryCreateOrConnectWithoutOwnerInputSchema } from './LibraryCreateOrConnectWithoutOwnerInputSchema';
import { LibraryCreateManyOwnerInputEnvelopeSchema } from './LibraryCreateManyOwnerInputEnvelopeSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema),z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema),z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema;
