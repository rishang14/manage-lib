import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleCreateWithoutLibraryInputSchema } from './UserRoleCreateWithoutLibraryInputSchema';
import { UserRoleUncheckedCreateWithoutLibraryInputSchema } from './UserRoleUncheckedCreateWithoutLibraryInputSchema';

export const UserRoleCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default UserRoleCreateOrConnectWithoutLibraryInputSchema;
