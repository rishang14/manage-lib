"use server";

import { cache } from "react";
import { getstaticlibdetails, shifts } from "./dbcalls";
import { verifysession } from "./serverClienthelper";
import { Shift } from "@prisma/client";

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
