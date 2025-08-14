import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";
import { checkIdSchema } from "@/common/types";
import {
  getuserID,
  islibexist,
  isthisUserIsInLib,
  isuserexist,
} from "@/lib/apihelper";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const { auth } = NextAuth(authConfig);

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { statusText: "ok", status: 401 }
    );
  }

  try {
    const { id } = await params;
    const parseddatalib = checkIdSchema.safeParse({ id });
    if (!parseddatalib.success) {
      return NextResponse.json(
        { error: "Lib id format is wrong or missing" },
        { status: 400 }
      );
    }
    const userid = await getuserID(session?.user?.email);
    const userexist = await isuserexist(userid as string);
    const libexist = await islibexist(parseddatalib.data.id as string);

    if (!userexist.success) {
      return NextResponse.json({ error: userexist.message }, { status: 404 });
    }
    if (!libexist.success) {
      return NextResponse.json({ error: libexist.message }, { status: 404 });
    }

    if (libexist.success && userexist.success) {
      const userRole = await isthisUserIsInLib(
        parseddatalib.data.id as string,
        userid as string
      );

      if (!userRole.success) {
        return NextResponse.json({ error: userRole.message }, { status: 400 });
      }

      if (userRole.success && userRole.message !== "ADMIN") {
        return NextResponse.json(
          { error: "Only admin can delete Lib " },
          { status: 403 }
        );
      }
      const deletedLib = await prisma.library.delete({ where: { id } });

      if (!deletedLib) {
        return NextResponse.json(
          { error: "failed to delete  library" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: "Lib is deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error while deleting the Library error:", error);
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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
