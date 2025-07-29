import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryScalarWhereInputSchema } from './LibraryScalarWhereInputSchema';
import { LibraryUpdateManyMutationInputSchema } from './LibraryUpdateManyMutationInputSchema';
import { LibraryUncheckedUpdateManyWithoutOwnerInputSchema } from './LibraryUncheckedUpdateManyWithoutOwnerInputSchema';

export const LibraryUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => LibraryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LibraryUpdateManyMutationInputSchema),z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export default LibraryUpdateManyWithWhereWithoutOwnerInputSchema;
