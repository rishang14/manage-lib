import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutUserInputSchema } from './UserRoleUpdateWithoutUserInputSchema';
import { UserRoleUncheckedUpdateWithoutUserInputSchema } from './UserRoleUncheckedUpdateWithoutUserInputSchema';
import { UserRoleCreateWithoutUserInputSchema } from './UserRoleCreateWithoutUserInputSchema';
import { UserRoleUncheckedCreateWithoutUserInputSchema } from './UserRoleUncheckedCreateWithoutUserInputSchema';

export const UserRoleUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserRoleUpsertWithWhereUniqueWithoutUserInputSchema;
