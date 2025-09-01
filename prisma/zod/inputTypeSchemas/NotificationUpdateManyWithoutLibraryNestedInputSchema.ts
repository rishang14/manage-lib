import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutLibraryInputSchema } from './NotificationCreateWithoutLibraryInputSchema';
import { NotificationUncheckedCreateWithoutLibraryInputSchema } from './NotificationUncheckedCreateWithoutLibraryInputSchema';
import { NotificationCreateOrConnectWithoutLibraryInputSchema } from './NotificationCreateOrConnectWithoutLibraryInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema } from './NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema';
import { NotificationCreateManyLibraryInputEnvelopeSchema } from './NotificationCreateManyLibraryInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema } from './NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema';
import { NotificationUpdateManyWithWhereWithoutLibraryInputSchema } from './NotificationUpdateManyWithWhereWithoutLibraryInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutLibraryNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutLibraryInputSchema),z.lazy(() => NotificationCreateWithoutLibraryInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutLibraryInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUpdateManyWithoutLibraryNestedInputSchema;
