import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManySenderInputSchema } from './NotificationCreateManySenderInputSchema';

export const NotificationCreateManySenderInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManySenderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManySenderInputSchema),z.lazy(() => NotificationCreateManySenderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManySenderInputEnvelopeSchema;
