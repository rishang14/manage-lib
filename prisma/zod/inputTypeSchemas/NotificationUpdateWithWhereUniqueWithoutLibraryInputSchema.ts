import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutLibraryInputSchema } from './NotificationUpdateWithoutLibraryInputSchema';
import { NotificationUncheckedUpdateWithoutLibraryInputSchema } from './NotificationUncheckedUpdateWithoutLibraryInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutLibraryInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema;
