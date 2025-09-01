import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { NotificationTypeSchema } from '../inputTypeSchemas/NotificationTypeSchema'
import { NotificationStatusSchema } from '../inputTypeSchemas/NotificationStatusSchema'

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  status: NotificationStatusSchema,
  id: z.string().cuid(),
  message: z.string(),
  data: JsonValueSchema.nullable(),
  senderId: z.string().nullable(),
  receiverId: z.string(),
  libraryId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Notification = z.infer<typeof NotificationSchema>

export default NotificationSchema;
