import { z } from 'zod';

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

export const BookingSchema = z.object({
  id: z.string().cuid(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date(),
})

export type Booking = z.infer<typeof BookingSchema>

export default BookingSchema;
