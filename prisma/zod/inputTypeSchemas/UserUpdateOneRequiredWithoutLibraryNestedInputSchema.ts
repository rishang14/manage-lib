import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLibraryInputSchema } from './UserCreateWithoutLibraryInputSchema';
import { UserUncheckedCreateWithoutLibraryInputSchema } from './UserUncheckedCreateWithoutLibraryInputSchema';
import { UserCreateOrConnectWithoutLibraryInputSchema } from './UserCreateOrConnectWithoutLibraryInputSchema';
import { UserUpsertWithoutLibraryInputSchema } from './UserUpsertWithoutLibraryInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutLibraryInputSchema } from './UserUpdateToOneWithWhereWithoutLibraryInputSchema';
import { UserUpdateWithoutLibraryInputSchema } from './UserUpdateWithoutLibraryInputSchema';
import { UserUncheckedUpdateWithoutLibraryInputSchema } from './UserUncheckedUpdateWithoutLibraryInputSchema';

export const UserUpdateOneRequiredWithoutLibraryNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLibraryInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLibraryInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutLibraryInputSchema),z.lazy(() => UserUpdateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutLibraryNestedInputSchema;
