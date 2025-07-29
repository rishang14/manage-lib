import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeatWhereInputSchema } from './SeatWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { LibraryScalarRelationFilterSchema } from './LibraryScalarRelationFilterSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';

export const SeatWhereUniqueInputSchema: z.ZodType<Prisma.SeatWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => SeatWhereInputSchema),z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatWhereInputSchema),z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional()
}).strict());

export default SeatWhereUniqueInputSchema;
