import { Libraries } from "@/prisma/zod/inputTypeSchemas/LibraryCreateManyInputSchema";
import axios from "axios";
import { tuple } from "zod";

// export async function getalllibrary():Promise<Libraries[] | undefined>{
//     try {
//         const Libdata= await axios.get("api/getallibraries",{withCredentials:true});
//         return Libdata.data.library;
//     } catch (error) {
//     }
// }

export async function getLibdetails(libid: string, signal: AbortSignal) {
  try {
    const { data } = await axios.get(`api/getlibdetails/${libid}`, {
      signal,
      withCredentials: true,
    });
    return data.librariesDeatils;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled");
      return null; 
    }
    throw error; 
  }
}
