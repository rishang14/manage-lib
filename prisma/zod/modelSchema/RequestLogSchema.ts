import { z } from 'zod';

/////////////////////////////////////////
// REQUEST LOG SCHEMA
/////////////////////////////////////////

export const RequestLogSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
})

export type RequestLog = z.infer<typeof RequestLogSchema>

export default RequestLogSchema;
