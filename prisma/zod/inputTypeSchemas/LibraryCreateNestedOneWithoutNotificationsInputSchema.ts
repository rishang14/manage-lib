import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutNotificationsInputSchema } from './LibraryCreateWithoutNotificationsInputSchema';
import { LibraryUncheckedCreateWithoutNotificationsInputSchema } from './LibraryUncheckedCreateWithoutNotificationsInputSchema';
import { LibraryCreateOrConnectWithoutNotificationsInputSchema } from './LibraryCreateOrConnectWithoutNotificationsInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';

export const LibraryCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional()
}).strict();

export default LibraryCreateNestedOneWithoutNotificationsInputSchema;
