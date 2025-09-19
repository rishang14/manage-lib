import { z } from 'zod';
import { RoleTypeSchema } from '../inputTypeSchemas/RoleTypeSchema'

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  role: RoleTypeSchema,
  id: z.string().cuid(),
  userId: z.string(),
  libraryId: z.string(),
  joinedAt: z.coerce.date(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

export default UserRoleSchema;
