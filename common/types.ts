import z from "zod";
import { ShiftSchema, LibrarySchema ,SeatSchema,MemberSchema, BookingSchema } from "@/prisma/zod";
import { PaymentSchema } from "@/prisma/zod";

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
  
  /// types script types
  
  export interface dialogopenprops {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  }

  
  
export const seatdetailsschema= SeatSchema.omit({id:true}); 





export type bookingdetailsType<>={
  seatId:string, 
  shiftIds:Array<string>
}  

export const  MemberdetailsData= MemberSchema.omit({id:true, libraryId:true});   
export const paymentmode= PaymentSchema.omit({id:true,createdAt:true,paidAt:true,})
export const  Membereditinfo= MemberSchema.partial(); 

export const BookingRequestSchema = z.object({
  seatId: z.string(),
  shiftIds: z.array(z.string()).min(1), 
  date: z.coerce.date(),
  member: MemberdetailsData, 
  payment:paymentmode
}); 


export type apiResponse<> = {
  success: boolean;
  message?: string;
  error?: string;
};
export type seatdetails= z.infer<typeof  seatdetailsschema>; 
export type meberinfo=z.infer<typeof Membereditinfo>
export type CreateBookingInput = z.infer<typeof BookingRequestSchema>;
export type shiftupdateschemainput= z.infer<typeof shiftupdateschema>
export type shiftschemaInput = z.infer<typeof shiftschema>;
export type CreateLibraryInput = z.infer<typeof CreateLibrarySchema>;
export type libroles<>={
  libid:string, 
  role:string
} 