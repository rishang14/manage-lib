import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { alllibrary, getuserID } from "@/lib/apihelper";


export async function GET(req: NextRequest) {
  const session = await auth();
  // console.log(session,"session")
  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );
  }
  
  try {
    const userid = await session?.user?.id;
    if (!userid) {
      return NextResponse.json(
        { error: "Something is wrong with the user email" },
        { status: 401 }
      );
    }
    const library = await alllibrary(userid as string);
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
