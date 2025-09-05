import z, { string } from "zod";
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
 member: z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    joinedAt: z.date().optional(), // handled on backend
  }),
  payment: z.object({
    startMonth: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Invalid format (YYYY-MM)"),
    duration: z.number().min(1).max(12),
    amount: z.number().min(1, "Amount must be positive"),
    paid: z.boolean(),
    memberId: z.string().optional(), // backend fills this
    validTill: z.date().optional(), // derived field
  }),
  date: z.date().optional(), // booking date (current date or user selected)
  seatId: z.string().optional(), // from props
  shiftsIds: z.array(z.string()).min(1), 
  libraryId:z.string().cuid().optional()
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



export const BookingRequestBackendSchema = z.object({
  member: z.object({
    name: z.string(),
    phone: z.string(),
    joinedAt: z.date().optional(), // can let backend default to now
  }),
  libraryId: z.string().optional(), // injected from server
  seatId: z.string().optional(), // injected from server
  shiftsIds: z.array(z.string()),
  date: z.date().optional(),

  payment: z.object({
    amount: z.number(),
    duration: z.number(), // in months
    startMonth: z.string(), // e.g. "2025-08"
    paid: z.boolean(), 
  }),
});

export const BookingBackendSchema = BookingRequestSchema.extend({
  libraryId: z.string(),  // required in backend
  seatId: z.string(),     // required in backend
  payment: BookingRequestSchema.shape.payment.extend({
    paidAt: z.date().nullable().default(null),
    validTill: z.date(), // always required in backend
  }),
}); 

export type BookingBackendDbcheckInput= z.infer<typeof BookingBackendSchema>

export type BookingRequestbackendInput = z.infer<typeof BookingRequestBackendSchema>;


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
  id?: string;
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

export const emailSchema = z.string().email("Invalid email address format.");

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

export type Shiftwithmember = {
  id: string;
  shifttype: string;
  shiftid: string;
  startTime: string;
  endTime: string;
  member?: Member;
};

export type SeatShiftResult = {
  id: string;
  libraryId: string;
  seatNumber: string;
  _count: {
    bookings: number;
  };
};

export type Response<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string | Record<string, string[]>;
}; 


export type AddMemberDialogParams = {
  shiftId: string; 
  seatNumber:string,
  shiftName: string;
  libraryId?: string;
  selectedSeatId: string | null;
};