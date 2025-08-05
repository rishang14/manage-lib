import { auth } from "@/auth"
import { bookingdetailsType, libroles, shiftdataschema } from "@/common/types";
import { addnewShiftinmember , isbookingexist, UpdateShift } from "@/lib/helper";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server"


export async function POST(req:NextRequest){
    const session= await auth(); 
   if(!session?.user?.email){
    return NextResponse.json({error:"Unauthenticated request"},{status:401});
   } 

   try {
     const body= await req.json(); 

     const validatedata=shiftdataschema.safeParse(body); 

     if(!validatedata.success){
        return NextResponse.json({error:validatedata.error.flatten()},{status:401}); 
     } 

     const userrole= session?.user?.libdetails.find((item:libroles)=> item.libid === validatedata.data.libraryId); 

     if(!userrole){
        return NextResponse.json({error:"Unauthorized roles"},{status:403}); 

     } 

     if(userrole !== "ADMIN"){  
         return NextResponse.json({error:"only admins can change the seat"},{status:403})
     }  

     const  bookingdata:bookingdetailsType={
        seatId:validatedata.data.seatId, 
        shiftIds:validatedata.data.newShiftIds
     }  

     const bookingexist= await isbookingexist(bookingdata); 

     if(bookingexist){
        return NextResponse.json({error:"Booking already"})
     } 

     const newshift= await addnewShiftinmember(validatedata.data); 

     if(newshift== undefined){
        return  NextResponse.json({error:"error while adding new shit"},{status:500}); 
     } 

     return NextResponse.json({message:"shift is updated ", UpdateShift:newshift},{status:200});
   } catch (error) {  
     console.log("error while updating the shift in memeber booking",error)
     return NextResponse.json({error:"Internal Server Error"},{status:500});
   }
} 