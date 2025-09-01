import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyReceiverInputSchema } from './NotificationCreateManyReceiverInputSchema';

export const NotificationCreateManyReceiverInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyReceiverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyReceiverInputSchema),z.lazy(() => NotificationCreateManyReceiverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyReceiverInputEnvelopeSchema;
