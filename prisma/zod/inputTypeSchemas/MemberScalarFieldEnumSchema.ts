import { z } from 'zod';

export const MemberScalarFieldEnumSchema = z.enum(['id','name','phone','joinedAt','libraryId']);

export default MemberScalarFieldEnumSchema;
