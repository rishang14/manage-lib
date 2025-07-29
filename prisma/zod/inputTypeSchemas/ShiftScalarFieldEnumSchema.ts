import { z } from 'zod';

export const ShiftScalarFieldEnumSchema = z.enum(['id','name','startTime','endTime','libraryId']);

export default ShiftScalarFieldEnumSchema;
