import { auth } from "@/auth";
import { checkIdSchema, libroles, Membereditinfo } from "@/common/types"; 
import { undatedmemberinfo } from "@/lib/apihelper";
import { NextRequest, NextResponse } from "next/server";
export async function PATCH(req:NextRequest ,{params }:{params:Promise<{id:string}>}){
   const session= await auth(); 

   if(!session?.user?.email){
    return NextResponse.json({error:"Unauthenticated Request"},{status:401});
   }   

   try {
      const {id} = await params; 
      const body = await req.json();
      const validateid=checkIdSchema.safeParse({id}); 
      const validateddata=Membereditinfo.safeParse(body) ; 
      if(!validateid.success){
        return NextResponse.json({error:"Invalid format Id"},{status:400});
      }  

      if(!validateddata.success){
        return NextResponse.json({error:validateddata.error.flatten()},{status:400}); 
      } 
     
      const userRole= session?.user?.libdetails.find((i:libroles)=>i.libid == validateddata.data.libraryId); 
      
      if(!(userRole.role === "ADMIN" || userRole.role ==="Manager")){
         return NextResponse.json({error:"You dont have permission "},{status:403});
      } 

      const updatedmember = await undatedmemberinfo(validateddata.data);  

      if(updatedmember=== undefined){
        return NextResponse.json({error:"Member not found "},{status:404});
      }
     

      return  NextResponse.json({message:"Member is updated ",data:updatedmember},{status:200})

   } catch (error) {
    console.log("error while doing member updation",error); 
    return NextResponse.json({error:"Intrnal Server Error"},{status:500});
   }
}