import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { getalllibrary, getuserID } from "@/lib/helper";

const { auth } = NextAuth(authConfig);
export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );
  }
  
  try {
    const userid = await getuserID(session?.user.email as string);
    if (!userid) {
      return NextResponse.json(
        { error: "Something is wrong with the user email" },
        { status: 401 }
      );
    }
    const library = await getalllibrary(userid as string);
    return NextResponse.json(
      { message: "Successful ", library },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
