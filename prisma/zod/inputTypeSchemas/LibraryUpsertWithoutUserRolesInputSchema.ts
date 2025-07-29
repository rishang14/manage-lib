import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryUpdateWithoutUserRolesInputSchema } from './LibraryUpdateWithoutUserRolesInputSchema';
import { LibraryUncheckedUpdateWithoutUserRolesInputSchema } from './LibraryUncheckedUpdateWithoutUserRolesInputSchema';
import { LibraryCreateWithoutUserRolesInputSchema } from './LibraryCreateWithoutUserRolesInputSchema';
import { LibraryUncheckedCreateWithoutUserRolesInputSchema } from './LibraryUncheckedCreateWithoutUserRolesInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutUserRolesInput> = z.object({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryUpsertWithoutUserRolesInputSchema;
