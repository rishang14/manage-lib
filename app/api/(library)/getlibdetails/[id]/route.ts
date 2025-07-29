import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { checkIdSchema } from "@/common/types";
import { getlibrarydetails } from "@/lib/helper";

const { auth } = NextAuth(authConfig);

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );
  }

  try { 
    const { id } =  await params;   
    console.log(id,"ids");
    const parsed = checkIdSchema.safeParse({id}); 
    console.log(parsed)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid id or id is missing" }, { status: 400 }); 
    }  
    const librariesDeatils= await getlibrarydetails(parsed.data.id as string);
    return NextResponse.json({librariesDeatils }, { statusText: "successful", status: 200 });
  } catch (error) {
    return NextResponse.json({error:"Internal Server Error"},{status:500});
  }
}
    