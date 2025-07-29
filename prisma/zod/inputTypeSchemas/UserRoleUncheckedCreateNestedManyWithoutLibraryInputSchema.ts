import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutLibraryInputSchema } from './UserRoleCreateWithoutLibraryInputSchema';
import { UserRoleUncheckedCreateWithoutLibraryInputSchema } from './UserRoleUncheckedCreateWithoutLibraryInputSchema';
import { UserRoleCreateOrConnectWithoutLibraryInputSchema } from './UserRoleCreateOrConnectWithoutLibraryInputSchema';
import { UserRoleCreateManyLibraryInputEnvelopeSchema } from './UserRoleCreateManyLibraryInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';

export const UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleCreateWithoutLibraryInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserRoleUncheckedCreateNestedManyWithoutLibraryInputSchema;
