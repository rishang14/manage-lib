import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { checkIdSchema } from "@/common/types";
import { getlibrarydetails, getuserID, isthisUserIsInLib } from "@/lib/helper";
import { error } from "console";

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
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid id or id is missing" }, { status: 400 }); 
    }  
    const userid= await getuserID(session?.user?.email as string); 
    const userrole= await isthisUserIsInLib(id as string , userid as string); 

    if(!userrole.success){
      return NextResponse.json({error:userrole.message},{status:400})
    }  

    if(userrole.success && userrole.message !== "ADMIN" && userrole.message !== "MANAGER"){
      return NextResponse.json({error:"Admin and Manger can access this "},{status:403})
    }

    const librariesDeatils= await getlibrarydetails(parsed.data.id as string);
    return NextResponse.json({librariesDeatils }, { statusText: "successful", status: 200 });
  } catch (error) {
    return NextResponse.json({error:"Internal Server Error"},{status:500});
  }
}
    