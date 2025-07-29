import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutLibraryInputSchema } from './UserRoleCreateWithoutLibraryInputSchema';
import { UserRoleUncheckedCreateWithoutLibraryInputSchema } from './UserRoleUncheckedCreateWithoutLibraryInputSchema';
import { UserRoleCreateOrConnectWithoutLibraryInputSchema } from './UserRoleCreateOrConnectWithoutLibraryInputSchema';
import { UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema } from './UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema';
import { UserRoleCreateManyLibraryInputEnvelopeSchema } from './UserRoleCreateManyLibraryInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema } from './UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema';
import { UserRoleUpdateManyWithWhereWithoutLibraryInputSchema } from './UserRoleUpdateManyWithWhereWithoutLibraryInputSchema';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';

export const UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleCreateWithoutLibraryInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutLibraryInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserRoleUncheckedUpdateManyWithoutLibraryNestedInputSchema;
