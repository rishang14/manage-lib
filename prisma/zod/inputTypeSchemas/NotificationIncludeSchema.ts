import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { LibraryArgsSchema } from "../outputTypeSchemas/LibraryArgsSchema"

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  sender: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  receiver: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
}).strict()

export default NotificationIncludeSchema;
