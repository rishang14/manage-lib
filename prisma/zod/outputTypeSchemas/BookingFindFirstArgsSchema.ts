import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingIncludeSchema } from '../inputTypeSchemas/BookingIncludeSchema'
import { BookingWhereInputSchema } from '../inputTypeSchemas/BookingWhereInputSchema'
import { BookingOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingOrderByWithRelationInputSchema'
import { BookingWhereUniqueInputSchema } from '../inputTypeSchemas/BookingWhereUniqueInputSchema'
import { BookingScalarFieldEnumSchema } from '../inputTypeSchemas/BookingScalarFieldEnumSchema'
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

export const BookingFindFirstArgsSchema: z.ZodType<Prisma.BookingFindFirstArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema,BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingFindFirstArgsSchema;
