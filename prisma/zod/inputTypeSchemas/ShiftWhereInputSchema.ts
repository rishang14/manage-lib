import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { LibraryScalarRelationFilterSchema } from './LibraryScalarRelationFilterSchema';
import { LibraryWhereInputSchema } from './LibraryWhereInputSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';

export const ShiftWhereInputSchema: z.ZodType<Prisma.ShiftWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ShiftWhereInputSchema),z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftWhereInputSchema),z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema),z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional()
}).strict();

export default ShiftWhereInputSchema;
