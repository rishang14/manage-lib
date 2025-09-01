import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LibraryCreateWithoutNotificationsInputSchema } from './LibraryCreateWithoutNotificationsInputSchema';
import { LibraryUncheckedCreateWithoutNotificationsInputSchema } from './LibraryUncheckedCreateWithoutNotificationsInputSchema';
import { LibraryCreateOrConnectWithoutNotificationsInputSchema } from './LibraryCreateOrConnectWithoutNotificationsInputSchema';
import { LibraryUpsertWithoutNotificationsInputSchema } from './LibraryUpsertWithoutNotificationsInputSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { LibraryWhereUniqueInputSchema } from './LibraryWhereUniqueInputSchema';
import { LibraryUpdateToOneWithWhereWithoutNotificationsInputSchema } from './LibraryUpdateToOneWithWhereWithoutNotificationsInputSchema';
import { LibraryUpdateWithoutNotificationsInputSchema } from './LibraryUpdateWithoutNotificationsInputSchema';
import { LibraryUncheckedUpdateWithoutNotificationsInputSchema } from './LibraryUncheckedUpdateWithoutNotificationsInputSchema';

export const LibraryUpdateOneWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneWithoutNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LibraryCreateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutNotificationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutNotificationsInputSchema),z.lazy(() => LibraryUpdateWithoutNotificationsInputSchema),z.lazy(() => LibraryUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
}).strict();

export default LibraryUpdateOneWithoutNotificationsNestedInputSchema;
