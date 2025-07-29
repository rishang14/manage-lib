import { checkIdSchema, shiftschema } from "@/common/types";
import authConfig from "@/lib/auth.config";
import { getuserID, islibexist, isthisUserIsInLib, UpdateShift } from "@/lib/helper";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const {auth}=NextAuth(authConfig); 

export async function PATCH(req:NextRequest,{ params }: { params: Promise<{ id: string }> }){
   const session=await auth(); 

   if(!session?.user?.email){
    return NextResponse.json({error:"Unauthorized Request"},{status:401});
   } 

   try {
     const {id}= await params; 
     const validateshiftId=checkIdSchema.safeParse({id});  
     if(!validateshiftId.success  ){
        return NextResponse.json({error:"Invalid Id Format"},{status:400});
     }   
     const validatedata = shiftschema.safeParse(req.body); 
    if(!validatedata.success){
        return NextResponse.json({
            error:"Invalid data Format"
        },{status:400})
    }
     const userid=await getuserID(session?.user?.email); 
     const libexist= await islibexist(validatedata.data?.libraryId as string) 
      if(!libexist.success){
        return NextResponse.json({error:libexist.message},{status:400})
      } 

      const userrole= await isthisUserIsInLib(validatedata.data?.libraryId as string, userid as string ); 
      if(!userrole.success){
       return NextResponse.json({error:userrole.message},{status:400});
      } 

      if(userrole.success && userrole.message !== "ADMIN" && userrole.message !== "MANAGER" ){
        return NextResponse.json({error:"Admin and Manager  can access only"},{status:403})
      }
      
      const Updatedshift = await UpdateShift(id as string , validatedata.data) 

      return NextResponse.json({message:"shift is updated", updatedone:Updatedshift},{status:400});
   } catch (error) {
     console.log("error while updating shift",error)
     return NextResponse.json({error:"Internal Server Error"})
   }
}
