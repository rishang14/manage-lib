import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationStatusSchema } from './NotificationStatusSchema';

export const EnumNotificationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NotificationStatusSchema).optional()
}).strict();

export default EnumNotificationStatusFieldUpdateOperationsInputSchema;
