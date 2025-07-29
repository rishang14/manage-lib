import { LibraryType } from "@/prisma/generated/zod";
import prisma from "./prisma";
import { apiResponse } from "@/common/types";
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
  console.log(user,"user exist or not in the db");
  if (!user) {
    return {
      success: false,
      error: "user with this id not exist",
    };
  }
  return { success: true, message: "got the user" };
}

export async function islibexist(id: string): Promise<apiResponse> {
  const lib = await prisma.library.findFirst({ where: { id } }); 
  console.log(lib,"libexist or not ")
  if (!lib) {
    return {
      success: false,
      message: "lib with this id not exist",
    };
  }

  return { success: true, message: "got the library" };
}

export async function isthisUserIsLibAdmin(
  libid: string,
  userId: string
): Promise<apiResponse> {
  const userAdmin = await prisma.userRole.findUnique({
    where: {
      userId_libraryId: {
        userId: userId,
        libraryId: libid,
      },
    },
  });
  console.log(userAdmin, "userrole inside the library");
  if (!userAdmin) {
    return {
      success: false,
      message: "User not assigned to this library",
    };
  }

  if (userAdmin && userAdmin.role !== "ADMIN") {
    return { success: false, message: "User is not admin" };
  }

  return { success: true, message: "User is admin" };
}


export async function deleteLIb(libid:string):Promise<void> {
  
}