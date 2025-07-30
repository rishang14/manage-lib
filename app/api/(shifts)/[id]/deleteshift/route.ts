import { checkIdSchema } from "@/common/types";
import authConfig from "@/lib/auth.config";
import { getuserID, islibexist, isthisUserIsInLib } from "@/lib/helper";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { error } from "console";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized Request" },
      { status: 401 }
    );
  }

  try {
    const { id } = await params;
    const libid = req.body;
    const validateshiftId = checkIdSchema.safeParse({ id });
    const validateLibId = checkIdSchema.safeParse(libid);
    const userid = await getuserID(session?.user?.email);
    const libexist = await islibexist(validateLibId.data?.id as string);
    if (!(validateshiftId.success && validateLibId.success)) {
      return NextResponse.json({ error: "Invalid Id Format" }, { status: 400 });
    }
    if (!libexist.success) {
      return NextResponse.json({ error: libexist.message }, { status: 400 });
    }

    const userrole = await isthisUserIsInLib(
      validateLibId.data.id,
      userid as string
    );
    if (!userrole.success) {
      return NextResponse.json({ error: userrole.message }, { status: 400 });
    }

    if (userrole.success && userrole.message !== "ADMIN") {
      return NextResponse.json({ error: "Admin access only" }, { status: 400 });
    }

    const deletedshift = await prisma.shift.delete({ where: { id } });
    if (!deletedshift) {
      return NextResponse.json(
        { error: "Failed to delted shift" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "shift is deleted" ,deletedshift}, { status: 200 });
  } catch (error) {
    console.log("error while deleteing shift", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      console.log("Item not found for deletion.");
      return NextResponse.json(
        { error: "Item not found for deletion" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
