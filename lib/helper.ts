import { auth } from "@/auth";
import { BookingBackendDbcheckInput, bookingdetailsType, CreateBookingInput, libroles, SeatShiftResult } from "@/common/types";
import axios from "axios";
import { da } from "date-fns/locale";

export async function getLibdetails(libid: string, signal?: AbortSignal) {
  try {
    const libdetails = await axios.get(`/api/getlibdetails/${libid}`, {
      signal,
      withCredentials: true,
    });
    console.log(libdetails.data.librariesDeatils, "details");
    return libdetails.data.librariesDeatils;
  } catch (error) {
    console.log(error, "error from the libdetails data");
    if (axios.isCancel(error)) {
      throw error;
    }
    throw error;
  }
}

export async function verifysession(libid: string): Promise<libroles> {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not logged in");
  }
  const lib: libroles = session?.user?.libdetails.find(
    (u: libroles) => u.libid === libid
  );
  if (!lib) {
    throw new Error("Invalid access");
  }

  return lib;
}

export function transfromintotabledata(
  seats: any[],
  allShifts: any[]
): SeatShiftResult[] {
  return seats.map((seat) => {
    const shifts = allShifts.map((shift) => {
      // Find booking for this seat and shift combination
      const booking = seat.bookings.find((b: any) => b.shiftId === shift.id);

      return {
        id: `${seat.seatNumber}-${shift.name.toLowerCase()}`,
        shifttype: shift.name.toLowerCase(),
        shiftid: shift.id,
        startTime: shift.startTime,
        endTime: shift.endTime,
        member: booking
          ? {
              id: booking.member.id,
              name: booking.member.name,
              phone: booking.member.phone,
              joinedAt: booking.member.joinedAt.toISOString().split("T")[0],
              libraryId: booking.member.libraryId,
            }
          : undefined,
      };
    });

    return {
      id: seat.id,
      seatNumber: parseInt(seat.seatNumber),
      shifts,
    };
  });
}

export function getValidTillDateAfterAddingDuration(joinedAt=new Date(), duration: number) {
  let currmonth = joinedAt.getMonth() + 1;
  let year = joinedAt.getFullYear();
  let day = joinedAt.getDate();

  let Endmonth = duration;

  let newMonth;

  let validTill = currmonth + Endmonth;

  if (validTill > 12) {
    newMonth = validTill - 12;
    year += 1;
  } else {
    newMonth = validTill;
  }

  return new Date(year, newMonth - 1, day);
}



export function getfullDataAftervalidation(data:CreateBookingInput):BookingBackendDbcheckInput{
  if(!data.payment.paid){
     data.payment.validTill= getValidTillDateAfterAddingDuration(data.date as Date, 1); 
  }else{
    data.payment.validTill= getValidTillDateAfterAddingDuration(data.date as Date, data.payment.duration)
  } 

  return {
    libraryId:data.libraryId as string, 
    member:{
      name:data.member.name,
      phone:data.member.phone,
      joinedAt:data.member.joinedAt ?? new Date(), 

    }, 
    shiftsIds:data.shiftsIds, 
    seatId:data.seatId as string, 
    payment:{
      duration:data.payment.duration, 
      amount:data.payment.amount,
      startMonth:data.payment.startMonth,
      validTill:data.payment.validTill,
      paid:data.payment.paid,
      paidAt:data.payment.paid ? data.member.joinedAt  ?? new Date()  : null ,
    }

  }
}