import { z } from 'zod';

export const NotificationStatusSchema = z.enum(['PENDING','ACCEPTED','REJECTED','READ']);

export type NotificationStatusType = `${z.infer<typeof NotificationStatusSchema>}`

export default NotificationStatusSchema;
