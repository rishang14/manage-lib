import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  message: z.boolean().optional(),
  data: z.boolean().optional(),
  status: z.boolean().optional(),
  senderId: z.boolean().optional(),
  receiverId: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sender: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  receiver: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
}).strict()

export default NotificationSelectSchema;
