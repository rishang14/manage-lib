
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server"; 
import prisma from "@/lib/prisma";
import { CreateLibrarySchema } from "@/common/types";

const {auth}= NextAuth(authConfig);
 


export async function POST(req:NextRequest){  
    const session = await auth(); 
     if(!session?.user){
      return NextResponse.json({error:"Unautorized request"},{status:401}); 
     }  
     console.log(session,"session")
    try {
      const body= await req.json();  

      const validatedata= CreateLibrarySchema.safeParse(body); 

      if(!validatedata.success){
        return NextResponse.json({error:validatedata.error},{status:400}); 
      } 

      const created= await prisma.library.create({
        data:{
          name: validatedata.data.name, 
          ownerId:validatedata.data.ownerId, 
           shifts: {
           create: validatedata.data.shifts.map(shift => ({
            name: shift.name,
            startTime: shift.startTime,
            endTime: shift.endTime
          }))
        }
        }
      }) 

      return NextResponse.json({message:"Success library created",created},{status:200}); 
    } catch (error) {
       console.log(error,"something went wrong ") 
      return NextResponse.json({ error: "Failed to create library" }, { status: 500 }); 
    }
} 