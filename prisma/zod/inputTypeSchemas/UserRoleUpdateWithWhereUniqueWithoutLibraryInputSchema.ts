import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutLibraryInputSchema } from './UserRoleUpdateWithoutLibraryInputSchema';
import { UserRoleUncheckedUpdateWithoutLibraryInputSchema } from './UserRoleUncheckedUpdateWithoutLibraryInputSchema';

export const UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema;
