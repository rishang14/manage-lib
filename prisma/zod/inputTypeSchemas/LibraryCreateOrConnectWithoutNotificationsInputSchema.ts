import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryCreateWithoutNotificationsInputSchema } from './LibraryCreateWithoutNotificationsInputSchema';
import { LibraryUncheckedCreateWithoutNotificationsInputSchema } from './LibraryUncheckedCreateWithoutNotificationsInputSchema';

export const LibraryCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutNotificationsInput> = z.object({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutNotificationsInputSchema) ]),
}).strict();

export default LibraryCreateOrConnectWithoutNotificationsInputSchema;
