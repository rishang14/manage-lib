import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserRolesInputSchema } from './UserUpdateWithoutUserRolesInputSchema';
import { UserUncheckedUpdateWithoutUserRolesInputSchema } from './UserUncheckedUpdateWithoutUserRolesInputSchema';

export const UserUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserRolesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUserRolesInputSchema;
