import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum(['id','userId','libraryId','role']);

export default UserRoleScalarFieldEnumSchema;
