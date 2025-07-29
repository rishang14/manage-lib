import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutLibraryInputSchema } from './MemberCreateWithoutLibraryInputSchema';
import { MemberUncheckedCreateWithoutLibraryInputSchema } from './MemberUncheckedCreateWithoutLibraryInputSchema';
import { MemberCreateOrConnectWithoutLibraryInputSchema } from './MemberCreateOrConnectWithoutLibraryInputSchema';
import { MemberUpsertWithWhereUniqueWithoutLibraryInputSchema } from './MemberUpsertWithWhereUniqueWithoutLibraryInputSchema';
import { MemberCreateManyLibraryInputEnvelopeSchema } from './MemberCreateManyLibraryInputEnvelopeSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateWithWhereUniqueWithoutLibraryInputSchema } from './MemberUpdateWithWhereUniqueWithoutLibraryInputSchema';
import { MemberUpdateManyWithWhereWithoutLibraryInputSchema } from './MemberUpdateManyWithWhereWithoutLibraryInputSchema';
import { MemberScalarWhereInputSchema } from './MemberScalarWhereInputSchema';

export const MemberUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.MemberUpdateManyWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema),z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema),z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema),z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MemberUpdateManyWithoutLibraryNestedInputSchema;
