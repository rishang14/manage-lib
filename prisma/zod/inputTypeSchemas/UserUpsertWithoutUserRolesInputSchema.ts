import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUserRolesInputSchema } from './UserUpdateWithoutUserRolesInputSchema';
import { UserUncheckedUpdateWithoutUserRolesInputSchema } from './UserUncheckedUpdateWithoutUserRolesInputSchema';
import { UserCreateWithoutUserRolesInputSchema } from './UserCreateWithoutUserRolesInputSchema';
import { UserUncheckedCreateWithoutUserRolesInputSchema } from './UserUncheckedCreateWithoutUserRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserRolesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUserRolesInputSchema;
