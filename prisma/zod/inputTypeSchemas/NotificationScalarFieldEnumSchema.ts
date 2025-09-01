import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id','type','message','data','status','senderId','receiverId','libraryId','createdAt','updatedAt']);

export default NotificationScalarFieldEnumSchema;
