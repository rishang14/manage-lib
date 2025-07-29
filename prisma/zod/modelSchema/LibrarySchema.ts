import { z } from 'zod';

/////////////////////////////////////////
// LIBRARY SCHEMA
/////////////////////////////////////////

export const LibrarySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date(),
})

export type Library = z.infer<typeof LibrarySchema>

export default LibrarySchema;
