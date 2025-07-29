import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatCreateManyLibraryInputSchema } from './SeatCreateManyLibraryInputSchema';

export const SeatCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.SeatCreateManyLibraryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SeatCreateManyLibraryInputSchema),z.lazy(() => SeatCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SeatCreateManyLibraryInputEnvelopeSchema;
