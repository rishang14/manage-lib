import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberScalarWhereInputSchema } from './MemberScalarWhereInputSchema';
import { MemberUpdateManyMutationInputSchema } from './MemberUpdateManyMutationInputSchema';
import { MemberUncheckedUpdateManyWithoutLibraryInputSchema } from './MemberUncheckedUpdateManyWithoutLibraryInputSchema';

export const MemberUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => MemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateManyMutationInputSchema),z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryInputSchema) ]),
}).strict();

export default MemberUpdateManyWithWhereWithoutLibraryInputSchema;
