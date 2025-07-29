 import { NextRequest,NextResponse } from "next/server"; 
 import NextAuth from "next-auth"; 
 import authConfig from "@/lib/auth.config"; 
import { checkIdSchema } from "@/common/types";
import {  islibexist, isthisUserIsLibAdmin, isuserexist } from "@/lib/helper";
import { error } from "console";


 const {auth}=NextAuth(authConfig); 

 export async function DELETE(req:NextRequest, { params }: { params: Promise<{ id: string }> }){
      const session = await auth(); 
      
      if(!session?.user?.email){ 
        return NextResponse.json({error:"Unauthorized request"},{statusText:"ok", status:401});
      } 

      try {
         const parseddatauser = checkIdSchema.safeParse(req.body) 
         const {id} = await params; 
         const parseddatalib= checkIdSchema.safeParse({id}); 
         if(!parseddatauser.success){
            return NextResponse.json({error:"UserId is wrong or missing "},{status:400});
         } 
         if(!parseddatalib.success){
            return NextResponse.json({error:"Lib id format is wrong or missing"},{status:400});
         }
         
          const userexist = await isuserexist(parseddatauser.data.id as string); 
          const libexist= await islibexist(parseddatalib.data.id as string); 

          if(!userexist.success){
            return NextResponse.json({error:userexist.message},{status:400});
          } 
          if(!libexist.success){
            return NextResponse.json({error:libexist.message},{status:400});
          }
          
          if(libexist.success && userexist.success){
             const isadmin=  await isthisUserIsLibAdmin(parseddatalib.data.id as string,parseddatauser.data.id as string); 
             
             if(!isadmin.success){
               return NextResponse.json({error:isadmin.message},{status:400});
             } 


          }   

          return NextResponse.json({message:"Lib is deleted Successfully"},{status:200});
      } catch (error) {
        console.log("error while deleting the Library error:", error); 

        return NextResponse.json({error:"Internal Server Error"},{status:500});
      }
 }