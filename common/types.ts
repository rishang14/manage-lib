import z from "zod";
import { ShiftSchema, LibrarySchema ,SeatSchema } from "@/prisma/generated/zod";

export const CreateLibrarySchema = LibrarySchema.omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(3, "Library name is required"),
  shifts: z
    .array(
      ShiftSchema.omit({ id: true, libraryId: true }).extend({
        name: z.string().min(1, "Shift name is required"),
        startTime: z
          .string()
          .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
        endTime: z
          .string()
          .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
      })
    )
    .min(1, "At least one shift is required"),
});

export type CreateLibraryInput = z.infer<typeof CreateLibrarySchema>;

export const checkIdSchema = z.object({
  id: z.string().cuid(),
});

export const shiftschema = ShiftSchema.omit({ id: true }).extend({
  name: z.string().min(1, "Shift name is required"),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
});  

export const shiftupdateschema=ShiftSchema.partial(); 
export type shiftupdateschemainput= z.infer<typeof shiftupdateschema>
export type shiftschemaInput = z.infer<typeof shiftschema>;

/// types script types

export interface dialogopenprops {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export type apiResponse<> = {
  success: boolean;
  message?: string;
  error?: string;
};


export const seatdetailsschema= SeatSchema.omit({id:true}); 

export type seatdetails= z.infer<typeof  seatdetailsschema>; 


export type libroles<>={
 libid:string, 
 role:string
}