import { auth } from "@/auth";
import { bookingdetailsType, libroles, seatdetails } from "@/common/types";
import { isbookingexist } from "@/lib/apihelper";
import prisma from "@/lib/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthenticated request" },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const validatedata = seatdetails.safeParse(body);

    if (!validatedata.success) {
      return NextResponse.json(
        { error: validatedata.error.flatten() },
        { status: 400 }
      );
    }

    const userRole = session?.user?.libdetails.find(
      (item: libroles) => item.libid === validatedata.data.libraryId
    );

    if (!userRole) {
      return NextResponse.json(
        { error: "Unauthorized request" },
        { status: 403 }
      );
    }

    if (userRole.role !== "ADMIN") {
      return NextResponse.json({ error: "Only admins can change the seat" });
    }
    const newseatdata: bookingdetailsType = {
      seatId: validatedata.data.newSeatId,
      shiftIds: validatedata.data.newShiftIds,
    };
    const bookingexist = await isbookingexist(newseatdata);

    if (bookingexist) {
      return NextResponse.json(
        { error: "Seat is already taken " },
        { status: 409 }
      );
    }

    const deletions = prisma.seat.delete({
      where: {
        id: validatedata.data.oldseatId,
      },
    });

    const creations = validatedata.data.newShiftIds.map((shiftId) =>
      prisma.booking.create({
        data: {
          memberId: validatedata.data.memberId,
          seatId: validatedata.data.newSeatId,
          shiftId,
          date: new Date(),
        },
      })
    );

    await prisma.$transaction([deletions, ...creations]);

    return NextResponse.json(
      { message: "Seat changed successfully" },
      { status: 200 }
    );
  } catch (error) {
  console.log("error while changeing the memebr seat", error); 

  return NextResponse.json({error:"Internal Server Error"},{status:500});

  }
}
