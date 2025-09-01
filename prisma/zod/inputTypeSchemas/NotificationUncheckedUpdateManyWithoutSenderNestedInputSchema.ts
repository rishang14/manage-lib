import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutSenderInputSchema } from './NotificationCreateWithoutSenderInputSchema';
import { NotificationUncheckedCreateWithoutSenderInputSchema } from './NotificationUncheckedCreateWithoutSenderInputSchema';
import { NotificationCreateOrConnectWithoutSenderInputSchema } from './NotificationCreateOrConnectWithoutSenderInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutSenderInputSchema } from './NotificationUpsertWithWhereUniqueWithoutSenderInputSchema';
import { NotificationCreateManySenderInputEnvelopeSchema } from './NotificationCreateManySenderInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutSenderInputSchema } from './NotificationUpdateWithWhereUniqueWithoutSenderInputSchema';
import { NotificationUpdateManyWithWhereWithoutSenderInputSchema } from './NotificationUpdateManyWithWhereWithoutSenderInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutSenderInputSchema),z.lazy(() => NotificationCreateWithoutSenderInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManySenderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutSenderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedUpdateManyWithoutSenderNestedInputSchema;
