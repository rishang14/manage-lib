import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutUserInputSchema } from './UserRoleCreateWithoutUserInputSchema';
import { UserRoleUncheckedCreateWithoutUserInputSchema } from './UserRoleUncheckedCreateWithoutUserInputSchema';
import { UserRoleCreateOrConnectWithoutUserInputSchema } from './UserRoleCreateOrConnectWithoutUserInputSchema';
import { UserRoleUpsertWithWhereUniqueWithoutUserInputSchema } from './UserRoleUpsertWithWhereUniqueWithoutUserInputSchema';
import { UserRoleCreateManyUserInputEnvelopeSchema } from './UserRoleCreateManyUserInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithWhereUniqueWithoutUserInputSchema } from './UserRoleUpdateWithWhereUniqueWithoutUserInputSchema';
import { UserRoleUpdateManyWithWhereWithoutUserInputSchema } from './UserRoleUpdateManyWithWhereWithoutUserInputSchema';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';

export const UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema),z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema),z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema;
