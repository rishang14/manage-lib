import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberCreateManyLibraryInputSchema } from './MemberCreateManyLibraryInputSchema';

export const MemberCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.MemberCreateManyLibraryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MemberCreateManyLibraryInputSchema),z.lazy(() => MemberCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MemberCreateManyLibraryInputEnvelopeSchema;
