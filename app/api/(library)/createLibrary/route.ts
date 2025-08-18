
import { NextRequest, NextResponse } from "next/server";
import { CreateLibrarySchema } from "@/common/types";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { array } from "zod";

 


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
        },   
        userRoles:{
           create:{
            userId:validatedata.data.ownerId, 
            role:"ADMIN"
           } 
        }
        }
      }) 

      return NextResponse.json({message:" library created successfully",},{status:201}); 
    } catch (error) {
       console.log(error,"something went wrong  while creating the library ") 
      return NextResponse.json({ error: "Failed to create library" }, { status: 500 }); 
    }
} 