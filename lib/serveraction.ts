"use server";
import {
  getstaticlibdetails,
  shifts,
  updateShift,
  addnewShift,
  libraryUserSeatWithshift,
  createseat,
  getseatdetails,
} from "./dbcalls";
import { transfromintotabledata, verifysession } from "./helper";
import { Shift } from "@/prisma/zod";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { Prisma, Seat } from "@prisma/client";
import { seatdetails, seatdetailsschema, shiftschema } from "@/common/types";
import { _success } from "zod/v4/core";
import { error } from "console";
import { string } from "zod";

export type apiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string | Record<string, string[]>;
};

export const  getssrlibdata=async(libid: string) => {
  await verifysession(libid);
  const data = await getstaticlibdetails(libid);
  return  data ?  data : undefined;
}

export const getshifts = async (libdid: string): Promise<Shift[]> => {
  await verifysession(libdid);

  const shiftdata = await shifts(libdid);

  if (!shiftdata) return [];
  return shiftdata;
};

export const updateshift = async (data: Shift): Promise<apiResponse<Shift>> => {
  try {
    const user = await verifysession(data.libraryId);
    if (!user.role) {
      return { success: false, error: "you dont have a valid role" };
    }
    const validatedata = shiftschema.safeParse(data);
    if (!validatedata.success) {
      return {
        success: false,
        error: JSON.stringify(validatedata.error.flatten()),
      };
    }

    const updatedshiftdata = await updateShift(data);

    revalidatePath(`/library/${data.libraryId}`);
    return { success: true, data: updatedshiftdata };
  } catch (error: any) {
    console.error("Failed to update shift:", error);

    // Handle Prisma record not found error specifically
    if (error.code === "P2025") {
      return { success: false, error: "Shift not found" };
    }

    return {
      success: false,
      error: "Something went wrong while updating shift",
    };
  }
};

export const addNewShift = async (data: Shift): Promise<apiResponse<Shift>> => {
  try {
    const user = await verifysession(data.libraryId);

    if (!user.role) {
      return { success: false, error: "You dont have a role" };
    }

    const validatedata = shiftschema.safeParse(data);
    if (!validatedata.success) {
      return {
        success: false,
        error: JSON.stringify(validatedata.error.flatten()),
      };
    }

    const createdshift = await addnewShift(data);
    revalidatePath(`/library/${data.libraryId}`);
    return { success: true, data: createdshift };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal server error" };
  }
};

export const DelteShift = async (
  id: string,
  libraryId: string
): Promise<apiResponse<string>> => {
  try {
    const user = await verifysession(libraryId);

    if (user.role !== "ADMIN") {
      return { success: false, error: "You dont have valid permission" };
    }

    const shiftcount = await prisma.shift.count({ where: { libraryId } });

    if (shiftcount <= 1) {
      return { success: false, error: "Atleast one shift is required" };
    }
    const deletedshift = await prisma.shift.delete({ where: { id } });
    revalidatePath(`/library/${libraryId}`);
    return { success: true, data: "deleted successfully" };
  } catch (error: any) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      console.log("Item not found for deletion.");
      return { success: false, error: "Item not found for deletion" };
    }
    return { success: false, error: "Internal server error" };
  }
};

export const allbookingAndSeatdetails = async (libid: string,limit:number,skip:number) => {
  try {
    const user = await verifysession(libid);

    if (!user.role) {
      return { success: false, error: "Not valid request" };
    }

    const seats = await libraryUserSeatWithshift(libid,limit,skip);
    const shift = await getshifts(libid as string);
    const data = transfromintotabledata(seats as any[], shift);
   console.log(data,"data") 
    return data;
  } catch (error) {
    console.log(error, "something went wrong ");
  }
};

export const addseat = async (
  libraryId: string,
  formdata: FormData):Promise<void>=>{
  try {
    const user = await verifysession(libraryId);
    const seatNumber = formdata.get("seatnumber") as string;
    console.log(seatNumber, "data for the fomm");
    if (!user.role) {
      throw new Error ("You dont have valid permission");
    }
    const validatedata = seatdetailsschema.safeParse({
      seatNumber,
      libraryId,
    });
    if (!validatedata.success) {
     throw new Error (JSON.stringify(validatedata.error.flatten()));
    }
    const alreadyexists = await prisma.seat.findFirst({
      where: {
        seatNumber,
        libraryId,
      },
    });

    if (alreadyexists) {
      throw new Error ("Seat already exists with this ");
    }
    const addedseat = await createseat(validatedata.data);
     console.log(addedseat,"seat")
    revalidatePath(`/library/${libraryId}?tab=manage`);
  } catch (error) { 
    console.log(error,"error")
    throw new Error( "Something went wrong pls try again" );
  }
};



export const getmemberdetailsasperTheseat= async(seatid:string,shiftid:string,libid:string)=>{
   try {
      //    const user=await  verifysession(libid); 

      // if(!user){
      //   return {success:false, error:"you dont have access "}
      // } 
      const data= await getseatdetails(seatid as string);
      console.log(data,"seatdetails"); 
      return data; 
   } catch (error) {
      return {success:false,error:"something went wrong "}; 

   }
}