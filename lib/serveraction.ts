"use server";

import { cache } from "react";
import {
  getstaticlibdetails,
  shifts,
  updateShift,
  addnewShift,
} from "./dbcalls";
import { verifysession } from "./serverClienthelper";
import { ShiftSchema, Shift } from "@/prisma/zod";
import { json } from "stream/consumers";
import { revalidatePath } from "next/cache";

export type apiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string | Record<string, string[]>;
};

export async function getssrlibdata(libid: string): Promise<
  | ({
      owner: {
        name: string | null;
        email: string;
      };
    } & {
      id: string;
      name: string;
      ownerId: string;
      createdAt: Date;
    })
  | null
  | undefined
> {
  await verifysession(libid);
  const data = await getstaticlibdetails(libid);

  if (!data) {
    return;
  }

  return data;
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
    console.log(user, "role here ");
    console.log(data, "here data from the sever");
    if (!user.role) {
      return { success: false, error: "you dont have a valid role" };
    }
    const validatedata = ShiftSchema.safeParse(data);
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

    const validatedata = ShiftSchema.safeParse(data);
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
