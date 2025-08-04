import { auth } from "@/auth";
import { checkIdSchema, libroles } from "@/common/types";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";




export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const session= await auth(); 

    if(!session?.user.email){
        return NextResponse.json({error:"Unauthenticated request "},{status:401})
    } 

    try {
        const {id}= await params ; 
        const validatedlibid=checkIdSchema.safeParse(req.body); 
        const validatedmemberId=checkIdSchema.safeParse({id}); 
        
        if(!(validatedlibid.success && validatedmemberId.success)){
            return NextResponse.json({error:"Invalid id format"},{status:400});
        }
        
        const userorle= session?.user.libdetails.find((item:libroles)=> item.libid === validatedlibid.data.id); 

        if(!userorle){
            return NextResponse.json({error:"You are not associated with this library"},{status:403})
        }else if(userorle && userorle.role !== "ADMIN"){
            return NextResponse.json({error:"only admin can delete the memeber"},{status:403});
        } 

        const deletemember=   await prisma.member.delete({where:{id:validatedmemberId.data.id}}); 
        if(!deletemember){
            return NextResponse.json({error:"Unable to delete member"},{status:500});
        } 
         
        return NextResponse.json({message:"Member is deleted "},{status:200});
    } catch (error) { 
           console.log("error while deleting the Member:", error);
            if (
              error instanceof Prisma.PrismaClientKnownRequestError &&
              error.code === "P2025"
            ) {
              console.log("Member not found for deletion.");
              return NextResponse.json(
                { error: "Member not found for deletion" },
                { status: 404 }
              );
            }
            return NextResponse.json(
              { error: "Internal Server Error" },
              { status: 500 }
            );
    }
}