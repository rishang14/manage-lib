import { z } from 'zod';

/////////////////////////////////////////
// SEAT SCHEMA
/////////////////////////////////////////

export const SeatSchema = z.object({
  id: z.string().cuid(),
  seatNumber: z.string(),
  libraryId: z.string(),
})

export type Seat = z.infer<typeof SeatSchema>

export default SeatSchema;
