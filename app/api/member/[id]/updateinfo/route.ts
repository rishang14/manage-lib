import { auth } from "@/auth";
import { checkIdSchema } from "@/common/types";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";




export async function PATCH(req:NextRequest ,{params }:{params:Promise<{id:string}>}){
   const session= await auth(); 

   if(!session?.user?.email){
    return NextResponse.json({error:"Unauthorized Request"},{status:400});
   }   

   try {
      const {id} = await params; 
      const body = req.json();
      const validateid=checkIdSchema.safeParse(({id})); 
    //   const validateddata; 
      if(!validateid.success){
        return NextResponse.json({error:"Invalid format Id"},{status:401});
      } 
   } catch (error) {
    
   }
}