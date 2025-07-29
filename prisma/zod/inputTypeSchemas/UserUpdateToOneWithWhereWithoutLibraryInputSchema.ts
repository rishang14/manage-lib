import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutLibraryInputSchema } from './UserUpdateWithoutLibraryInputSchema';
import { UserUncheckedUpdateWithoutLibraryInputSchema } from './UserUncheckedUpdateWithoutLibraryInputSchema';

export const UserUpdateToOneWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutLibraryInputSchema;
