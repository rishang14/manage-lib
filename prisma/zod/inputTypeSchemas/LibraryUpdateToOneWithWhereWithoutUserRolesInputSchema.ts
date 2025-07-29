import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryUpdateWithoutUserRolesInputSchema } from './LibraryUpdateWithoutUserRolesInputSchema';
import { LibraryUncheckedUpdateWithoutUserRolesInputSchema } from './LibraryUncheckedUpdateWithoutUserRolesInputSchema';

export const LibraryUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutUserRolesInput> = z.object({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutUserRolesInputSchema) ]),
}).strict();

export default LibraryUpdateToOneWithWhereWithoutUserRolesInputSchema;
