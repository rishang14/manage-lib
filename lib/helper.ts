import { LibraryType } from "@/prisma/generated/zod";
import prisma from "./prisma";

export async function getuserID(email: string): Promise<string | undefined> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      return user.id;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(`Error retrieving user with email ${email}:`, error);
    return undefined;
  }
}

export async function  getalllibrary(userid:string):Promise<LibraryType[]>{  
    try {
      const lib = await prisma.library.findMany({
        where:{
         ownerId :userid,
        }
    })
   if(lib){
     return lib; 
   } else{
    return [];
   }  
    } catch (error) { 
        console.log("error while getting the library"); 
       return [] 
    }
   
}