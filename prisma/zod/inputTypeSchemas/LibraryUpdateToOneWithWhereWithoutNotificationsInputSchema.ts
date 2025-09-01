import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryUpdateWithoutNotificationsInputSchema } from './LibraryUpdateWithoutNotificationsInputSchema';
import { LibraryUncheckedUpdateWithoutNotificationsInputSchema } from './LibraryUncheckedUpdateWithoutNotificationsInputSchema';

export const LibraryUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutNotificationsInput> = z.object({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutNotificationsInputSchema) ]),
}).strict();

export default LibraryUpdateToOneWithWhereWithoutNotificationsInputSchema;
