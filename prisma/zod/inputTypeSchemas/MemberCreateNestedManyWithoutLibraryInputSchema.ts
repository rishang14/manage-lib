import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateWithoutLibraryInputSchema } from './MemberCreateWithoutLibraryInputSchema';
import { MemberUncheckedCreateWithoutLibraryInputSchema } from './MemberUncheckedCreateWithoutLibraryInputSchema';
import { MemberCreateOrConnectWithoutLibraryInputSchema } from './MemberCreateOrConnectWithoutLibraryInputSchema';
import { MemberCreateManyLibraryInputEnvelopeSchema } from './MemberCreateManyLibraryInputEnvelopeSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';

export const MemberCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema),z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema),z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MemberCreateNestedManyWithoutLibraryInputSchema;
