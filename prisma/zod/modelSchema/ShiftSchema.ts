import { z } from 'zod';

/////////////////////////////////////////
// SHIFT SCHEMA
/////////////////////////////////////////

export const ShiftSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string(),
})

export type Shift = z.infer<typeof ShiftSchema>

export default ShiftSchema;
