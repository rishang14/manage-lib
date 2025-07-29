import { LibraryType, Shift } from "@/prisma/generated/zod";
import prisma from "./prisma";
import { apiResponse, shiftschemaInput } from "@/common/types";
import { Fascinate } from "next/font/google";

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

export async function getalllibrary(userid: string): Promise<LibraryType[]> {
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
  if (!libdetails) return {};
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
        message: "lib with this id not exist",
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

export async function deleteLIb(id: string): Promise<void> {
  try {
    const dellib = await prisma.library.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error, "while delting the library");
  }
}

export async function UpdateShift(shift: shiftschemaInput): Promise<Shift> {
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
