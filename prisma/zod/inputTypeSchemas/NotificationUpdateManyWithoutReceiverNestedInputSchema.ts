import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutReceiverInputSchema } from './NotificationCreateWithoutReceiverInputSchema';
import { NotificationUncheckedCreateWithoutReceiverInputSchema } from './NotificationUncheckedCreateWithoutReceiverInputSchema';
import { NotificationCreateOrConnectWithoutReceiverInputSchema } from './NotificationCreateOrConnectWithoutReceiverInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema } from './NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema';
import { NotificationCreateManyReceiverInputEnvelopeSchema } from './NotificationCreateManyReceiverInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema } from './NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema';
import { NotificationUpdateManyWithWhereWithoutReceiverInputSchema } from './NotificationUpdateManyWithWhereWithoutReceiverInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUpdateManyWithoutReceiverNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutReceiverNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutReceiverInputSchema),z.lazy(() => NotificationCreateWithoutReceiverInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyReceiverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutReceiverInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutReceiverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUpdateManyWithoutReceiverNestedInputSchema;
