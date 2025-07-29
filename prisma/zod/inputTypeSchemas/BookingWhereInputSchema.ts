import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SeatScalarRelationFilterSchema } from './SeatScalarRelationFilterSchema';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';
import { MemberScalarRelationFilterSchema } from './MemberScalarRelationFilterSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';
import { ShiftScalarRelationFilterSchema } from './ShiftScalarRelationFilterSchema';
import { ShiftWhereInputSchema } from './ShiftWhereInputSchema';

export const BookingWhereInputSchema: z.ZodType<Prisma.BookingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  seatId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  shiftId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  seat: z.union([ z.lazy(() => SeatScalarRelationFilterSchema),z.lazy(() => SeatWhereInputSchema) ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  shift: z.union([ z.lazy(() => ShiftScalarRelationFilterSchema),z.lazy(() => ShiftWhereInputSchema) ]).optional(),
}).strict();

export default BookingWhereInputSchema;
