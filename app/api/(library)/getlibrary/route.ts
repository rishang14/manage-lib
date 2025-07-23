import { NextRequest, NextResponse } from "next/server";
import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";
import { getuserID } from "@/lib/helper";

 const {auth}= NextAuth(authConfig); 
export async function GET(req: NextRequest) { 
    const session= await auth();  
   
    if(!session?.user){
        return NextResponse.json({error:"Unauthorized request"},{status:401});
    } 
    try {  

        const userid  = getuserID(session?.user.email as string); 
         return NextResponse.json({message:"Successful " }, {status:200});
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
         
}