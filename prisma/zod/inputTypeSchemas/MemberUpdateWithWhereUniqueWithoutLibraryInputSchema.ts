import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateWithoutLibraryInputSchema } from './MemberUpdateWithoutLibraryInputSchema';
import { MemberUncheckedUpdateWithoutLibraryInputSchema } from './MemberUncheckedUpdateWithoutLibraryInputSchema';

export const MemberUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateWithoutLibraryInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default MemberUpdateWithWhereUniqueWithoutLibraryInputSchema;
