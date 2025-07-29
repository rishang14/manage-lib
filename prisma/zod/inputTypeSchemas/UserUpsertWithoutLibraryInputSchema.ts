import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutLibraryInputSchema } from './UserUpdateWithoutLibraryInputSchema';
import { UserUncheckedUpdateWithoutLibraryInputSchema } from './UserUncheckedUpdateWithoutLibraryInputSchema';
import { UserCreateWithoutLibraryInputSchema } from './UserCreateWithoutLibraryInputSchema';
import { UserUncheckedCreateWithoutLibraryInputSchema } from './UserUncheckedCreateWithoutLibraryInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutLibraryInputSchema: z.ZodType<Prisma.UserUpsertWithoutLibraryInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutLibraryInputSchema;
