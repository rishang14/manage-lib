import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';
import { UserRoleUpdateManyMutationInputSchema } from './UserRoleUpdateManyMutationInputSchema';
import { UserRoleUncheckedUpdateManyWithoutUserInputSchema } from './UserRoleUncheckedUpdateManyWithoutUserInputSchema';

export const UserRoleUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default UserRoleUpdateManyWithWhereWithoutUserInputSchema;
