import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutUserInputSchema } from './UserRoleUpdateWithoutUserInputSchema';
import { UserRoleUncheckedUpdateWithoutUserInputSchema } from './UserRoleUncheckedUpdateWithoutUserInputSchema';

export const UserRoleUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default UserRoleUpdateWithWhereUniqueWithoutUserInputSchema;
