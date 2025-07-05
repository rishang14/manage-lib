import  z from "zod";  
import { ShiftSchema,LibrarySchema } from "@/prisma/generated/zod";


export const CreateLibrarySchema = LibrarySchema
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(3, "Library name is required"),
    shifts: z.array(
      ShiftSchema.omit({ id: true, libraryId: true }).extend({
        name: z.string().min(1, "Shift name is required"),
        startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
        endTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
      })
    ).min(1, "At least one shift is required")
  })

export type CreateLibraryInput = z.infer<typeof CreateLibrarySchema>
