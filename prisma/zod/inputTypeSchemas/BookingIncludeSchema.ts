import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeatArgsSchema } from "../outputTypeSchemas/SeatArgsSchema"
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
import { ShiftArgsSchema } from "../outputTypeSchemas/ShiftArgsSchema"

export const BookingIncludeSchema: z.ZodType<Prisma.BookingInclude> = z.object({
  seat: z.union([z.boolean(),z.lazy(() => SeatArgsSchema)]).optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  shift: z.union([z.boolean(),z.lazy(() => ShiftArgsSchema)]).optional(),
}).strict()

export default BookingIncludeSchema;
