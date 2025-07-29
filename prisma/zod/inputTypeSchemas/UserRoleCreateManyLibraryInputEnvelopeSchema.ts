import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateManyLibraryInputSchema } from './UserRoleCreateManyLibraryInputSchema';

export const UserRoleCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyLibraryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserRoleCreateManyLibraryInputSchema),z.lazy(() => UserRoleCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserRoleCreateManyLibraryInputEnvelopeSchema;
