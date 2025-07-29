import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleCreateWithoutUserInputSchema } from './UserRoleCreateWithoutUserInputSchema';
import { UserRoleUncheckedCreateWithoutUserInputSchema } from './UserRoleUncheckedCreateWithoutUserInputSchema';

export const UserRoleCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserRoleCreateOrConnectWithoutUserInputSchema;
