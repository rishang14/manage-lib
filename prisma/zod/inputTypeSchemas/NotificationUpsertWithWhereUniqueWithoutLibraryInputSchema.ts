import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutLibraryInputSchema } from './NotificationUpdateWithoutLibraryInputSchema';
import { NotificationUncheckedUpdateWithoutLibraryInputSchema } from './NotificationUncheckedUpdateWithoutLibraryInputSchema';
import { NotificationCreateWithoutLibraryInputSchema } from './NotificationCreateWithoutLibraryInputSchema';
import { NotificationUncheckedCreateWithoutLibraryInputSchema } from './NotificationUncheckedCreateWithoutLibraryInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutLibraryInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema;
