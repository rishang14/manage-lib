import { z } from 'zod';

export const BookingScalarFieldEnumSchema = z.enum(['id','seatId','memberId','date','shiftId','createdAt']);

export default BookingScalarFieldEnumSchema;
