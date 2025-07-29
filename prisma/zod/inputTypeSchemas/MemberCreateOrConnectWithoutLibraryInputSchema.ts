import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberCreateWithoutLibraryInputSchema } from './MemberCreateWithoutLibraryInputSchema';
import { MemberUncheckedCreateWithoutLibraryInputSchema } from './MemberUncheckedCreateWithoutLibraryInputSchema';

export const MemberCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default MemberCreateOrConnectWithoutLibraryInputSchema;
