import { z } from 'zod';

/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////

export const MemberSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date(),
  libraryId: z.string(),
})

export type Member = z.infer<typeof MemberSchema>

export default MemberSchema;
