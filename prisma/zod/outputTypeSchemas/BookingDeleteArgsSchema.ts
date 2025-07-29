import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingIncludeSchema } from '../inputTypeSchemas/BookingIncludeSchema'
import { BookingWhereUniqueInputSchema } from '../inputTypeSchemas/BookingWhereUniqueInputSchema'
import { SeatArgsSchema } from "../outputTypeSchemas/SeatArgsSchema"
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
import { ShiftArgsSchema } from "../outputTypeSchemas/ShiftArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingSelectSchema: z.ZodType<Prisma.BookingSelect> = z.object({
  id: z.boolean().optional(),
  seatId: z.boolean().optional(),
  memberId: z.boolean().optional(),
  date: z.boolean().optional(),
  shiftId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  seat: z.union([z.boolean(),z.lazy(() => SeatArgsSchema)]).optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  shift: z.union([z.boolean(),z.lazy(() => ShiftArgsSchema)]).optional(),
}).strict()

export const BookingDeleteArgsSchema: z.ZodType<Prisma.BookingDeleteArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
  where: BookingWhereUniqueInputSchema,
}).strict() ;

export default BookingDeleteArgsSchema;
