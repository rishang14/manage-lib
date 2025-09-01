import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LibraryCountOutputTypeSelectSchema: z.ZodType<Prisma.LibraryCountOutputTypeSelect> = z.object({
  userRoles: z.boolean().optional(),
  seats: z.boolean().optional(),
  members: z.boolean().optional(),
  shifts: z.boolean().optional(),
  notifications: z.boolean().optional(),
}).strict();

export default LibraryCountOutputTypeSelectSchema;
