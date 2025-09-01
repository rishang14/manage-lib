import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutLibraryInputSchema } from './NotificationUncheckedUpdateManyWithoutLibraryInputSchema';

export const NotificationUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutLibraryInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutLibraryInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutLibraryInputSchema;
