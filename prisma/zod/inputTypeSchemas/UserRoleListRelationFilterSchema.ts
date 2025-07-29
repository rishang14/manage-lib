import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereInputSchema } from './UserRoleWhereInputSchema';

export const UserRoleListRelationFilterSchema: z.ZodType<Prisma.UserRoleListRelationFilter> = z.object({
  every: z.lazy(() => UserRoleWhereInputSchema).optional(),
  some: z.lazy(() => UserRoleWhereInputSchema).optional(),
  none: z.lazy(() => UserRoleWhereInputSchema).optional()
}).strict();

export default UserRoleListRelationFilterSchema;
