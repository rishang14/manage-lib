import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftCreateManyLibraryInputSchema } from './ShiftCreateManyLibraryInputSchema';

export const ShiftCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.ShiftCreateManyLibraryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ShiftCreateManyLibraryInputSchema),z.lazy(() => ShiftCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ShiftCreateManyLibraryInputEnvelopeSchema;
