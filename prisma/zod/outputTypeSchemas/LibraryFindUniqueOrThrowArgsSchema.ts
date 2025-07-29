import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraryIncludeSchema } from '../inputTypeSchemas/LibraryIncludeSchema'
import { LibraryWhereUniqueInputSchema } from '../inputTypeSchemas/LibraryWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { SeatFindManyArgsSchema } from "../outputTypeSchemas/SeatFindManyArgsSchema"
import { MemberFindManyArgsSchema } from "../outputTypeSchemas/MemberFindManyArgsSchema"
import { ShiftFindManyArgsSchema } from "../outputTypeSchemas/ShiftFindManyArgsSchema"
import { LibraryCountOutputTypeArgsSchema } from "../outputTypeSchemas/LibraryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibrarySelectSchema: z.ZodType<Prisma.LibrarySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  seats: z.union([z.boolean(),z.lazy(() => SeatFindManyArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => MemberFindManyArgsSchema)]).optional(),
  shifts: z.union([z.boolean(),z.lazy(() => ShiftFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LibraryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LibraryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LibraryFindUniqueOrThrowArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: z.lazy(() => LibraryIncludeSchema).optional(),
  where: LibraryWhereUniqueInputSchema,
}).strict() ;

export default LibraryFindUniqueOrThrowArgsSchema;
