import { auth } from "@/auth";
import { bookingdetailsType, changeshiftSchema, libroles } from "@/common/types";
import { changemembershifts, delteshiftBooking, isbookingexist } from "@/lib/dbcalls";
import prisma from "@/lib/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){  
    const session= await auth(); 

    if(!session?.user?.email){
        return NextResponse.json({error:"Unautorized Request"},{status:400})
    } 

    try {
        const body = await req.json(); 
        const validatedata=changeshiftSchema.safeParse(body); 

        if(!validatedata.success){
            return NextResponse.json({error:validatedata.error.flatten()},{status:401});
        }
        
       const userrole= session?.user.libdetails.find((item:libroles)=> item.libid === validatedata.data.libraryId); 

       if(!userrole || userrole.role !== "ADMIN"){
        return NextResponse.json({error:"Only admins can delte the request"},{status:403}); 
       } 

       const newshiftdata:bookingdetailsType={
        seatId:validatedata.data.seatId,  
        shiftIds:validatedata.data.newShiftIds
       } 


       const bookingexist= await isbookingexist(newshiftdata); 

       
    if (bookingexist) {
      const bookings = bookingexist.map((item) => item.shift.name).join(",");
      return NextResponse.json(
        {
          error: `These shifts are already taken`,
        },
        { status: 409 }
      );
    } 

     const oldShiftdata:bookingdetailsType={
      seatId:validatedata.data.seatId, 
      shiftIds:validatedata.data.oldShiftIds
     }  

     const deleteshift =  delteshiftBooking(oldShiftdata); 
    const changeshit=   changemembershifts(validatedata.data );

   await prisma.$transaction([deleteshift, ...changeshit]); 

    
     return NextResponse.json({message:"shifts are updated sucessfully"},{status:200}); 
    } catch (error) {
         console.log("errror while changing shifts",error); 
       return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}