import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateManyOwnerInputSchema } from './LibraryCreateManyOwnerInputSchema';

export const LibraryCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.LibraryCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LibraryCreateManyOwnerInputSchema),z.lazy(() => LibraryCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LibraryCreateManyOwnerInputEnvelopeSchema;
