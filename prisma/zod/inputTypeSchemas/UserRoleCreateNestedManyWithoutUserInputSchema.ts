import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutUserInputSchema } from './UserRoleCreateWithoutUserInputSchema';
import { UserRoleUncheckedCreateWithoutUserInputSchema } from './UserRoleUncheckedCreateWithoutUserInputSchema';
import { UserRoleCreateOrConnectWithoutUserInputSchema } from './UserRoleCreateOrConnectWithoutUserInputSchema';
import { UserRoleCreateManyUserInputEnvelopeSchema } from './UserRoleCreateManyUserInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';

export const UserRoleCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema),z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema),z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserRoleCreateNestedManyWithoutUserInputSchema;
