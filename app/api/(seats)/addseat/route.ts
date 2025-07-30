import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { seatdetailsschema } from "@/common/types";
import {createseat} from "@/lib/helper";
import { date } from "zod";
import { constants } from "buffer";



const {auth} = NextAuth(authConfig); 


export async function POST(req:NextRequest){
  const session = await auth(); 

  if(!session?.user?.email){
    return NextResponse.json({error:"Unauthorized request"},{status:401}); 
  } 

  try {
       const body=  await req.json() ;  

       const validatedata= seatdetailsschema.safeParse(body); 

       if(!validatedata.success){
       return NextResponse.json({error:"Invalid data format"}, {status:400}); 
       }
       // have to do some checks  like the user is creating is admin or manager 
      const addedseat = await createseat(validatedata.data);  
      if(addedseat === undefined) {
        return NextResponse.json({error:"Something went wrong while creating seat Pls try again"},{status:400})
      } 

      return NextResponse.json({data:addedseat, message:"seat created"},{status:201,statusText:"ok"});
     
 
  } catch (error) {
     console.log("error while creating seat", error); 
      
     return NextResponse.json({error:"Internal Server Error"},{status:500}); 
  }

}