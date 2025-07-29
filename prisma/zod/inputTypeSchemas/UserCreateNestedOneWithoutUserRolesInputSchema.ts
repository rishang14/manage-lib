import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserRolesInputSchema } from './UserCreateWithoutUserRolesInputSchema';
import { UserUncheckedCreateWithoutUserRolesInputSchema } from './UserUncheckedCreateWithoutUserRolesInputSchema';
import { UserCreateOrConnectWithoutUserRolesInputSchema } from './UserCreateOrConnectWithoutUserRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUserRolesInputSchema;
