import { auth } from "@/auth";
import { libroles } from "@/common/types";
import axios from "axios";
import { error } from "console";

export async function getLibdetails(libid: string, signal?: AbortSignal) {
  console.log("libid", libid);
  try {
    const libdetails = await axios.get(`/api/getlibdetails/${libid}`, {
      signal,
      withCredentials: true,
    });
    console.log(libdetails.data.librariesDeatils, "details");
    return libdetails.data.librariesDeatils;
  } catch (error) {
    console.log(error, "error from the libdetails data");
    if (axios.isCancel(error)) {
      console.log("Request canceled");
      throw error;
    }
    throw error;
  }
}

export async function verifysession(libid: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not logged in");
  }

  const lib = session?.user?.libdetails.find(
    (u: libroles) => u.libid === libid
  );

  if (!lib) {
    throw new Error("Invalid access");
  }

  return lib.role;
}
