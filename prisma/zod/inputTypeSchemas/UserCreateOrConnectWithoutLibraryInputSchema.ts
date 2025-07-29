import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutLibraryInputSchema } from './UserCreateWithoutLibraryInputSchema';
import { UserUncheckedCreateWithoutLibraryInputSchema } from './UserUncheckedCreateWithoutLibraryInputSchema';

export const UserCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutLibraryInputSchema;
