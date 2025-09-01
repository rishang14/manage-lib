import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyLibraryInputSchema } from './NotificationCreateManyLibraryInputSchema';

export const NotificationCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyLibraryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyLibraryInputSchema),z.lazy(() => NotificationCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyLibraryInputEnvelopeSchema;
