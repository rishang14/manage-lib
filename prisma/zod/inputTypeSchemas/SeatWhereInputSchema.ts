import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { LibraryScalarRelationFilterSchema } from './LibraryScalarRelationFilterSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';

export const SeatWhereInputSchema: z.ZodType<Prisma.SeatWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SeatWhereInputSchema),z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatWhereInputSchema),z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional()
}).strict();

export default SeatWhereInputSchema;
