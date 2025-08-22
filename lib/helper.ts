import { auth } from "@/auth";
import { libroles } from "@/common/types";
import axios from "axios";

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

export async function verifysession(libid: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not logged in");
  }
  const lib = session?.user?.libdetails.find(
    (u: libroles) => u.libid === libid
  );
  if(!lib) {
    throw new Error("Invalid access");
  }

  return lib;
}


export function transfromintotabledata(seats:any[] , allShifts:any[]){
  return seats.map(seat => {
    const shifts = allShifts.map(shift => {
      // Find booking for this seat and shift combination
      const booking = seat.bookings.find((b: any) => b.shiftId === shift.id);
      
      return {
        id: `${seat.seatNumber}-${shift.name.toLowerCase()}`,
        type: shift.name.toLowerCase(),
        startTime: shift.startTime,
        endTime: shift.endTime,
        member: booking ? {
          id: booking.member.id,
          name: booking.member.name,
          phone: booking.member.phone,
          joinedAt: booking.member.joinedAt.toISOString().split('T')[0]
        } : undefined
      };
    });

    return {
      seatNumber: parseInt(seat.seatNumber),
      shifts
    };
  });
}
