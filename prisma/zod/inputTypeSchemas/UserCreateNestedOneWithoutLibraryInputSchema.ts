import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutLibraryInputSchema } from './UserCreateWithoutLibraryInputSchema';
import { UserUncheckedCreateWithoutLibraryInputSchema } from './UserUncheckedCreateWithoutLibraryInputSchema';
import { UserCreateOrConnectWithoutLibraryInputSchema } from './UserCreateOrConnectWithoutLibraryInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutLibraryInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema),z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLibraryInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutLibraryInputSchema;
