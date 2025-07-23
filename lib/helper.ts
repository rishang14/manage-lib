import prisma from "./prisma"; 



export  async function getuserID(email:string):Promise<string | undefined>{
     const user= await  prisma.user.findUnique({
      where:{
        email:email
      }, 
      select:{
        id:true,
      }
     }); 

   

    if(user) return user.id ; 

    return undefined;
}
