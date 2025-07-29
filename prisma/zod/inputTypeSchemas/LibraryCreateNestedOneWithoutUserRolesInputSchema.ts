import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutUserRolesInputSchema } from './LibraryCreateWithoutUserRolesInputSchema';
import { LibraryUncheckedCreateWithoutUserRolesInputSchema } from './LibraryUncheckedCreateWithoutUserRolesInputSchema';
import { LibraryCreateOrConnectWithoutUserRolesInputSchema } from './LibraryCreateOrConnectWithoutUserRolesInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutUserRolesInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional()
}).strict();

export default LibraryCreateNestedOneWithoutUserRolesInputSchema;
