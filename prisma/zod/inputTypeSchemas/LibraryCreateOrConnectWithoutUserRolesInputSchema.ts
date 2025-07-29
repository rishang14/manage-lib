import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutUserRolesInputSchema } from './LibraryCreateWithoutUserRolesInputSchema';
import { LibraryUncheckedCreateWithoutUserRolesInputSchema } from './LibraryUncheckedCreateWithoutUserRolesInputSchema';

export const LibraryCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutUserRolesInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutUserRolesInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutUserRolesInputSchema;
