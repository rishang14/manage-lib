import { auth } from "@/auth";
import {
  bookingdetailsType,
  BookingRequestSchema,
  checkIdSchema,
  CreateBookingInput,
  libroles,
} from "@/common/types";
import { createbooking, isbookingexist } from "@/lib/dbcalls";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unautorized Request" }, { status: 400 });
  }

  try {
    const { id } = await params;
    const body = req.json();
    const validateddata = BookingRequestSchema.safeParse(body);
    const validateid = checkIdSchema.safeParse({ id });

    if (!validateid.success) {
      return NextResponse.json({ error: "Invalid id format" }, { status: 401 });
    }
    if (!validateddata.success) {
      return NextResponse.json(
        { error: validateddata.error.flatten() },
        { status: 401 }
      );
    }
    const libexist = session?.user?.libdetails.find(
      (i: libroles) => i.libid == id
    );
    if (!libexist) {
      return NextResponse.json(
        { error: "No lib found with this id" },
        { status: 404 }
      );
    }
    const bookingcheck: bookingdetailsType = {
      seatId: validateddata.data.seatId as string,
      shiftIds: validateddata.data.shiftsIds,
    };

    const bookingexist = await isbookingexist(bookingcheck);

    if (bookingexist) {
      const bookings = bookingexist.map((item) => item.shift.name).join(",");
      return NextResponse.json(
        {
          error: `Seat is already booked for these shifts: ${bookings} shifts`,
        },
        { status: 409 }
      );
    }
    const createdbooking = await createbooking(
      validateddata.data as CreateBookingInput,
      id
    );

    if (createdbooking == undefined) {
      return NextResponse.json(
        { error: "Somethig went wrong while creating booking" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Booking created", createbooking },
      { status: 201 }
    );
  } catch (error) {
    console.log("error while creating the booking ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
