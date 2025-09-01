import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutLibraryInputSchema } from './NotificationCreateWithoutLibraryInputSchema';
import { NotificationUncheckedCreateWithoutLibraryInputSchema } from './NotificationUncheckedCreateWithoutLibraryInputSchema';
import { NotificationCreateOrConnectWithoutLibraryInputSchema } from './NotificationCreateOrConnectWithoutLibraryInputSchema';
import { NotificationCreateManyLibraryInputEnvelopeSchema } from './NotificationCreateManyLibraryInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutLibraryInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutLibraryInputSchema),z.lazy(() => NotificationCreateWithoutLibraryInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutLibraryInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationCreateNestedManyWithoutLibraryInputSchema;
