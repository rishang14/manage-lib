import { shiftschema } from "@/common/types";
import authConfig from "@/lib/auth.config";
import { addnewShift, getuserID, islibexist, isthisUserIsInLib,  } from "@/lib/apihelper";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized Request" },
      { status: 401 }
    );
  }
  try {
    const body = await req.json();
    const validatedata = shiftschema.safeParse(body);

    if (!validatedata.success) {
      return NextResponse.json({ error: validatedata.error }, { status: 400 });
    } 
   
    const userid=await getuserID(session?.user?.email);
    const libexist = await islibexist(validatedata.data.libraryId as string); 
    const userrole=await isthisUserIsInLib(validatedata.data.libraryId as string,userid as string);  

    if (!libexist.success) {
      return NextResponse.json({ error: libexist.message }, { status: 404 });
    }
    if(!userrole.success){ 
        return NextResponse.json({error:userrole.message},{status:404})
    }
   
    if(userrole.success && userrole.message !== "ADMIN" && userrole.message !== "MANAGER"){
        return NextResponse.json({error:"Only admin and manager can add shift"},{status:403})
    }
    const newshift = await addnewShift(validatedata.data);

    return NextResponse.json(
      { message: "Added Successfully", newshift },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "while adding the shift");

    return NextResponse.json(
      { error: "Inernal Server Error" },
      { status: 500 }
    );
  }
}
