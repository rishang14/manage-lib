import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutOwnerInputSchema } from './LibraryCreateWithoutOwnerInputSchema';
import { LibraryUncheckedCreateWithoutOwnerInputSchema } from './LibraryUncheckedCreateWithoutOwnerInputSchema';

export const LibraryCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutOwnerInputSchema;
