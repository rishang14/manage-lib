import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryUpdateWithoutNotificationsInputSchema } from './LibraryUpdateWithoutNotificationsInputSchema';
import { LibraryUncheckedUpdateWithoutNotificationsInputSchema } from './LibraryUncheckedUpdateWithoutNotificationsInputSchema';
import { LibraryCreateWithoutNotificationsInputSchema } from './LibraryCreateWithoutNotificationsInputSchema';
import { LibraryUncheckedCreateWithoutNotificationsInputSchema } from './LibraryUncheckedCreateWithoutNotificationsInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';

export const LibraryUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional()
}).strict();

export default LibraryUpsertWithoutNotificationsInputSchema;
