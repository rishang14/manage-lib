import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum(['id','userId','libraryId','role','joinedAt']);

export default UserRoleScalarFieldEnumSchema;
