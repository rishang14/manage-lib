import { z } from 'zod';

export const RoleTypeSchema = z.enum(['ADMIN','MANAGER']);

export type RoleTypeType = `${z.infer<typeof RoleTypeSchema>}`

export default RoleTypeSchema;
