import { checkIdSchema } from "@/common/types";
import authConfig from "@/lib/auth.config";
import { getuserID, islibexist, isthisUserIsInLib, } from "@/lib/dbcalls";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";



const {auth}= NextAuth(authConfig); 
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){ 

    const session=await auth(); 

    if(!session?.user?.email){
        return NextResponse.json({error:"Unauthorized request"},{status:400}); 
    } 

    try {
        const {id} = await params; 
        const libid = req.body;   
        const validateid= checkIdSchema.safeParse({id});  
        const userid= await getuserID(session?.user?.email as string); 
        const validatelibid= checkIdSchema.safeParse({libid}); 
        if(!validateid.success && !validatelibid.success){
            return NextResponse.json({error:"Invalid Id format"},{status:400});
        }  

        const libexist= await islibexist(validatelibid.data?.id as string); 
        const userole = await isthisUserIsInLib(validatelibid.data?.id as string , userid as string );
        if(!libexist.success){
            return NextResponse.json({error:libexist.message},{status:404}); 
        } 

       if(!userole.success){
           return NextResponse.json({error:userole.message},{status:404});
       }
     
       if(userole.success && userole.message !== "ADMIN" ){
         return  NextResponse.json({error:"Only admin  can delete this seat"},{status:401}); 
       }
       
         const deletedseat =   await prisma.seat.delete({where:{id:validateid.data?.id}});   
         
         if(!deletedseat){
            return NextResponse.json({error:"Failed to delte Seat"},{status:500});
         }

         return NextResponse.json({message:"Seat deleted Successfully",deletedseat},{status:200}); 

    } catch (error) {
         console.log("error while deleting the seat ",error) 
       if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        console.log('Item not found for deletion.'); 
          return NextResponse.json({ error: 'Item not found for deletion' }, { status: 404 });
      }
         return NextResponse.json({error:'Internal Server Error'},{status:500}); 
    }

}