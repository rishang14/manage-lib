import { z } from 'zod';

export const SeatScalarFieldEnumSchema = z.enum(['id','seatNumber','libraryId']);

export default SeatScalarFieldEnumSchema;
