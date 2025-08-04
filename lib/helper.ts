import { Library ,Shift,Seat} from "@/prisma/zod";
import prisma from "./prisma";
import { apiResponse, bookingdetailsType, CreateBookingInput, seatdetails, shiftschemaInput ,shiftupdateschemainput,meberinfo } from "@/common/types";
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

    if(!user){
      return undefined
    } 

    return user.id
  } catch (error) {
    console.error(`Error retrieving user with email ${email}:`, error);
    return undefined;
  }
}

export async function getalllibrary(userid: string): Promise<Library[]> {
  try {
    const lib = await prisma.library.findMany({
      where: {
        ownerId: userid,
      },
    });
    if (lib) {
      return lib;
    } else {
      return [];
    }
  } catch (error) {
    console.log("error while getting the library");
    return [];
  }
}

export async function getlibrarydetails(id: string) {
  const libdetails = await prisma.library.findUnique({
    where: { id },
    include: {
      shifts: true,
      members: true,
      seats: true,
      userRoles: true,
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  if (!libdetails) return undefined;
  return libdetails;
}

export async function isuserexist(id: string): Promise<apiResponse> {
  const user = await prisma.user.findFirst({ where: { id } });
  console.log(user, "user exist or not in the db");
  if (!user) {
    return {
      success: false,
      error: "user with this id not exist",
    };
  }
  return { success: true, message: "got the user" };
}

export async function islibexist(id: string): Promise<apiResponse> {
  try {
    const lib = await prisma.library.findFirst({ where: { id } });
    console.log(lib, "libexist or not ");
    if (!lib) {
      return {
        success: false,
        message: "lib not found ",
      };
    }

    return { success: true, message: "got the library" };
  } catch (error) {
    return {
      success: false,
      message: "Internal error in function islibexist",
    };
  }
}

export async function isthisUserIsInLib(
  libid: string,
  userId: string
): Promise<apiResponse> {
  try {
    const user = await prisma.userRole.findUnique({
      where: {
        userId_libraryId: {
          userId: userId,
          libraryId: libid,
        },
      },
    });
    console.log(user, "userrole inside the library");
    if (!user) {
      return {
        success: false,
        message: "User not assigned to this library",
      };
    }

    if (user && user.role === "ADMIN") {
      return { success: true, message: "ADMIN" };
    }    
      return {success:true , message:"MANAGER"};
  } catch (error) {
    console.log(error, "error while finding the admin in lib");
    return {
      success: false,
      message: "Intenal error in function isthisUserIsLibAdmin",
    };
  }
}



export async function addnewShift(shift: shiftschemaInput): Promise<Shift> {
  const addedshift = await prisma.shift.create({
    data: {
      startTime: shift.startTime,
      endTime: shift.endTime,
      name: shift.name,
      libraryId: shift.libraryId,
    },
  });

  return addedshift;
}


export async function UpdateShift(id:string, details:shiftupdateschemainput  ):Promise<Shift>{
   const updatedshifts= await prisma.shift.update({
    where:{id}, 
    data:{
      name:details.name, 
      startTime:details.startTime, 
      endTime:details.endTime 
    }
   }) 

   return updatedshifts;
} 


export async function createseat(details:seatdetails):Promise<Seat | undefined>{
   
  const createseat= await prisma.seat.create({
    data:{
      seatNumber:details.seatNumber,  
      libraryId:details.libraryId
    }
  }) 

  if(!createseat){
     return undefined; 
  } 

  return createseat;
} 




export async function DeleteUser(userid:string){ 
  try {
    
    const delteduser= await prisma.user.delete({where:{id:userid}}); 
    if(delteduser){
 
     console.log("user deleted")
    }
  } catch (error) {
    console.log(error,"while deleting user")
  }
}  


export async  function getseatdetails(seatId:string){
  const seat= await prisma.seat.findFirst({
    where:{id:seatId},
    include:{
      bookings:true
    }
  }) 

 return seat;
} 


export async function isbookingexist(data:bookingdetailsType){
  const isbookingexist= await prisma.booking.findMany({
    where:{
      seatId:data.seatId, 
      shiftId:{
       in : data.shiftIds
       } 
       
    } , 
    include:{
      shift:true
    }
  }) 

  return isbookingexist?.length > 0 ? isbookingexist : null;
} 


export  async function createbooking(datas:CreateBookingInput, libid:string){
   const created= await prisma.member.create({
   data:{
    name:datas.member.name , 
    phone:datas.member.phone , 
    joinedAt:datas.member.joinedAt, 
    libraryId:libid, 
    bookings:{
      create: datas.shiftIds.map((shiftId) => ({ 
        shiftId:shiftId, 
        seatId:datas.seatId, 
        date:datas.date,
      }))
    }, 
    payments:{
      create:{
        paid:datas.payment.paid,
        amount:datas.payment.amount,
        paidAt:datas.member.joinedAt, 
        validTill:datas.payment.validTill, 
        duration:datas.payment.amount, 
        startMonth:datas.payment.startMonth
      }
    }
   }, 
   }) 


   if(!created){
    return undefined
   } 
   return created;
}  


export async function undatedmemberinfo(memberinfo:meberinfo){
 
   try {
    const editedmember = await prisma.member.update({
      where: { id: memberinfo.id },
      data: {
        name: memberinfo.name,
        joinedAt: memberinfo.joinedAt,
        phone: memberinfo.phone,
      },
    });

    return editedmember;
  } catch (error: any) {
    if (error.code === 'P2025') {
      return undefined;
    }  
    throw error;
  }
}