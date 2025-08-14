import { auth } from "@/auth";
import { checkIdSchema } from "@/common/types";
import { getseatdetails } from "@/lib/apihelper";
import { NextResponse,NextRequest } from "next/server"; 




export async function  GET(req:NextRequest, {params}:{params:Promise<{id:string}>}) { 

    const session = await auth();  
    
    if(!session?.user?.email){
        return NextResponse.json({error:"Unauthorized  request"},{status:401});
    }  

    try {
        const {id} = await params; 
        const validateid= checkIdSchema.safeParse({id}); 
        if(!validateid.success){
            return NextResponse.json({error:"Invalid id fromat"},{status:401});
        }  
       
        const seatdetails= await getseatdetails(id as string); 
         
        if(!seatdetails){
            return NextResponse.json({error:"Seat not found"},{status:404}); 

        }
       
        return NextResponse.json({message:"seat found here is your seat",seatdetails},{status:200});
        
    } catch (error) { 
     console.log("error while sending seat details");
       return NextResponse.json({error:"Internal Server Error"},{status:500}) 
    }
    
}