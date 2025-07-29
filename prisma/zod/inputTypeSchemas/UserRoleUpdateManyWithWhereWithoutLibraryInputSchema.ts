import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';
import { UserRoleUpdateManyMutationInputSchema } from './UserRoleUpdateManyMutationInputSchema';
import { UserRoleUncheckedUpdateManyWithoutLibraryInputSchema } from './UserRoleUncheckedUpdateManyWithoutLibraryInputSchema';

export const UserRoleUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutLibraryInputSchema) ]),
}).strict();

export default UserRoleUpdateManyWithWhereWithoutLibraryInputSchema;
