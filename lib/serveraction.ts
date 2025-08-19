"use server";

import { cache } from "react";
import { getstaticlibdetails, shifts } from "./dbcalls";
import { verifysession } from "./serverClienthelper";

export async function getssrlibdata(libid: string) {
  try {
    await verifysession(libid);
    const data = await getstaticlibdetails(libid);

    if (!data) {
      return;
    }

    return data;
  } catch (error) {
    console.log("error while getting the data ");
    return error;
  }
}

export const  getshifts= async(libdid: string) =>{
  try {
    await verifysession(libdid);

    const shiftdata = await shifts(libdid);

    if (!shiftdata) return;
    return shiftdata;
  } catch (error) {
    return error;
  } 
}
