import z from "zod";
import {
  ShiftSchema,
  LibrarySchema,
  SeatSchema,
  MemberSchema,
  BookingSchema,
} from "@/prisma/zod";
import { PaymentSchema } from "@/prisma/zod";
import { Member } from "@prisma/client";

const ShiftCreateSchema = z.object({ 
  name: z.string().min(1, "Shift name is required"),
  startTime: z.string().nonempty("Start time is required"),
  endTime: z.string().nonempty("End time is required"),
}).refine(
  (shift) => shift.startTime < shift.endTime,
  {
    message: "End time must be after start time",
    path: ["endTime"], // 👈 crucial
  }
);


export const CreateLibrarySchema = LibrarySchema.omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(3, "Library name is required"),
  shifts: z
    .array(ShiftCreateSchema)
    .min(1, "At least one shift is required")
    .refine(
      (shifts) => new Set(shifts.map((s) => s.name)).size === shifts.length,
      { message: "Shift names must be unique" }
    ),
});

export const checkIdSchema = z.object({
  id: z.string().cuid(),
});

export const shiftschema = ShiftSchema.extend({ 
  id:z.string().cuid().optional(),
  name: z.string().min(1, "Shift name is required"),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "HH:mm format required"),
});

export const shiftupdateschema = ShiftSchema.partial();

export interface dialogopenprops {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const seatdetailsschema = SeatSchema.omit({ id: true });
export const MemberdetailsData = MemberSchema.omit({
  id: true,
  libraryId: true,
});
export const paymentmode = PaymentSchema.omit({
  id: true,
  createdAt: true,
  paidAt: true,
});
export const Membereditinfo = MemberSchema.partial();

export const BookingRequestSchema = z.object({
  seatId: z.string(),
  shiftIds: z.array(z.string()).min(1),
  date: z.coerce.date(),
  member: MemberdetailsData,
  payment: paymentmode,
});

export const changeshiftSchema = z.object({
  seatId: z.string(),
  oldShiftIds: z.array(z.string()).min(1),
  newShiftIds: z.array(z.string()).min(1),
  libraryId: z.string(),
  memberId: z.string(),
});

export const shiftdataschema = changeshiftSchema.omit({ oldShiftIds: true });

export const seatdetails = z.object({
  oldseatId: z.string(),
  newSeatId: z.string(),
  memberId: z.string(),
  oldShiftIds: z.array(z.string()).min(1),
  newShiftIds: z.array(z.string()).min(1),
  libraryId: z.string(),
});

export type DialogState = {
  isDialogOpen: boolean;
  setIsdialogOpen: (value: boolean) => void;
};

export type apiResponse<> = {
  success: boolean;
  message?: string;
  error?: string;
};
export type seatdetails = z.infer<typeof seatdetailsschema>;
export type meberinfo = z.infer<typeof Membereditinfo>;
export type CreateBookingInput = z.infer<typeof BookingRequestSchema>;
export type shiftupdateschemainput = z.infer<typeof shiftupdateschema>;
export type shiftschemaInput = z.infer<typeof shiftschema>;
export type CreateLibraryInput = z.infer<typeof CreateLibrarySchema>;
export type libroles<> = {
  libid: string;
  role: string;
};
export type changeshift = z.infer<typeof changeshiftSchema>;
export type bookingdetailsType<> = {
  seatId: string;
  shiftIds: Array<string>;
};
export type addshift = z.infer<typeof shiftdataschema>;

export type Shift= {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
}

export interface Library {
  id: string;
  name: string;
  totalSeats: number;
  occupiedSeats: number;
  shifts: Shift[];
  managerId?: string;
  createdAt: string;
}


export interface Manager {
  id: string;
  name: string;
  email: string;
  phone: string;
  libraryIds: string[];
  permissions: string[];
  createdAt: string;
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
  paidDate?: string;
  method?: "cash" | "card" | "upi" | "bank_transfer";
}

export interface Notification {
  id: string;
  type:
    | "member_added"
    | "member_removed"
    | "payment_received"
    | "seat_changed"
    | "manager_action";
  title: string;
  message: string;
  managerId?: string;
  memberId?: string;
  libraryId: string;
  isRead: boolean;
  createdAt: string;
}

export interface Library {
  id: string;
  name: string;
  totalSeats: number;
  occupiedSeats: number;
  shifts: Shift[];
  managerId?: string;
  createdAt: string;
}


export interface Manager {
  id: string;
  name: string;
  email: string;
  phone: string;
  libraryIds: string[];
  permissions: string[];
  createdAt: string;
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
  paidDate?: string;
  method?: "cash" | "card" | "upi" | "bank_transfer";
}

export interface Notification {
  id: string;
  type:
    | "member_added"
    | "member_removed"
    | "payment_received"
    | "seat_changed"
    | "manager_action";
  title: string;
  message: string;
  managerId?: string;
  memberId?: string;
  libraryId: string;
  isRead: boolean;
  createdAt: string;
}

export interface SeatShift {
  id: string;
  type: "morning" | "afternoon" | "evening";
  startTime: string;
  endTime: string;
  member?: {
    id: string;
    name: string;
    phone: string;
    email?: string;
    paymentStatus: "paid" | "pending" | "overdue";
    paymentAmount: number;
    joinedAt: string;
  };
}

export interface Seat {
  id: string;
  seatNumber: number;
  libraryId: string;
  shifts: SeatShift[];
  status: "empty" | "partially_filled" | "full";
  createdAt: string;
}

export interface LibraryStats {
  totalSeats: number;
  fullyOccupiedSeats: number;
  partiallyFilledSeats: number;
  emptySeats: number;
  totalMembers: number;
  totalRevenue: number;
  pendingPayments: number;
}



export type SeatShiftResult = {
  id: string;   
  seatname:string,        
  shifttype: string;  
  shiftid:string  
  startTime: string;   
  endTime: string;    
  member?: Member;     
};