import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutLibraryInputSchema } from './UserRoleUpdateWithoutLibraryInputSchema';
import { UserRoleUncheckedUpdateWithoutLibraryInputSchema } from './UserRoleUncheckedUpdateWithoutLibraryInputSchema';
import { UserRoleCreateWithoutLibraryInputSchema } from './UserRoleCreateWithoutLibraryInputSchema';
import { UserRoleUncheckedCreateWithoutLibraryInputSchema } from './UserRoleUncheckedCreateWithoutLibraryInputSchema';

export const UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema;
