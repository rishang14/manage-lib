import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';
import { MemberUpdateWithoutBookingsInputSchema } from './MemberUpdateWithoutBookingsInputSchema';
import { MemberUncheckedUpdateWithoutBookingsInputSchema } from './MemberUncheckedUpdateWithoutBookingsInputSchema';

export const MemberUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutBookingsInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export default MemberUpdateToOneWithWhereWithoutBookingsInputSchema;
