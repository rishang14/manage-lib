import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateWithoutLibraryInputSchema } from './MemberUpdateWithoutLibraryInputSchema';
import { MemberUncheckedUpdateWithoutLibraryInputSchema } from './MemberUncheckedUpdateWithoutLibraryInputSchema';
import { MemberCreateWithoutLibraryInputSchema } from './MemberCreateWithoutLibraryInputSchema';
import { MemberUncheckedCreateWithoutLibraryInputSchema } from './MemberUncheckedCreateWithoutLibraryInputSchema';

export const MemberUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MemberUpdateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default MemberUpsertWithWhereUniqueWithoutLibraryInputSchema;
