import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutUserRolesInputSchema } from './LibraryCreateWithoutUserRolesInputSchema';
import { LibraryUncheckedCreateWithoutUserRolesInputSchema } from './LibraryUncheckedCreateWithoutUserRolesInputSchema';
import { LibraryCreateOrConnectWithoutUserRolesInputSchema } from './LibraryCreateOrConnectWithoutUserRolesInputSchema';
import { LibraryUpsertWithoutUserRolesInputSchema } from './LibraryUpsertWithoutUserRolesInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateToOneWithWhereWithoutUserRolesInputSchema } from './LibraryUpdateToOneWithWhereWithoutUserRolesInputSchema';
import { LibraryUpdateWithoutUserRolesInputSchema } from './LibraryUpdateWithoutUserRolesInputSchema';
import { LibraryUncheckedUpdateWithoutUserRolesInputSchema } from './LibraryUncheckedUpdateWithoutUserRolesInputSchema';

export const LibraryUpdateOneRequiredWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutUserRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutUserRolesInputSchema),z.lazy(() => LibraryUpdateWithoutUserRolesInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
}).strict();

export default LibraryUpdateOneRequiredWithoutUserRolesNestedInputSchema;
