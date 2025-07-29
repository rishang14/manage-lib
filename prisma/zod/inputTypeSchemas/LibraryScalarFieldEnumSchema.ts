import { z } from 'zod';

export const LibraryScalarFieldEnumSchema = z.enum(['id','name','ownerId','createdAt']);

export default LibraryScalarFieldEnumSchema;
