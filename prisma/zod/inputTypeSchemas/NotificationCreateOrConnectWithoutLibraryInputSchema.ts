import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutLibraryInputSchema } from './NotificationCreateWithoutLibraryInputSchema';
import { NotificationUncheckedCreateWithoutLibraryInputSchema } from './NotificationUncheckedCreateWithoutLibraryInputSchema';

export const NotificationCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutLibraryInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutLibraryInputSchema;
