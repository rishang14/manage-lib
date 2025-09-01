import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['INVITE_MANAGER','MEMBER_ADDED','MEMBER_UPDATED','MEMBER_DELETED','SHIFT_CHANGE_REQUEST','SHIFT_CHANGE_RESPONSE','PAYMENT_REMINDER']);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`

export default NotificationTypeSchema;
