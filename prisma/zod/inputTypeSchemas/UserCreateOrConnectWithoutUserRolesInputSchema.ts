import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserRolesInputSchema } from './UserCreateWithoutUserRolesInputSchema';
import { UserUncheckedCreateWithoutUserRolesInputSchema } from './UserUncheckedCreateWithoutUserRolesInputSchema';

export const UserCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUserRolesInputSchema;
