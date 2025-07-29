import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserRolesInputSchema } from './UserCreateWithoutUserRolesInputSchema';
import { UserUncheckedCreateWithoutUserRolesInputSchema } from './UserUncheckedCreateWithoutUserRolesInputSchema';
import { UserCreateOrConnectWithoutUserRolesInputSchema } from './UserCreateOrConnectWithoutUserRolesInputSchema';
import { UserUpsertWithoutUserRolesInputSchema } from './UserUpsertWithoutUserRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserRolesInputSchema } from './UserUpdateToOneWithWhereWithoutUserRolesInputSchema';
import { UserUpdateWithoutUserRolesInputSchema } from './UserUpdateWithoutUserRolesInputSchema';
import { UserUncheckedUpdateWithoutUserRolesInputSchema } from './UserUncheckedUpdateWithoutUserRolesInputSchema';

export const UserUpdateOneRequiredWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserRolesInputSchema),z.lazy(() => UserUpdateWithoutUserRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUserRolesNestedInputSchema;
