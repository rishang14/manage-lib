
import axios from "axios";

export async function getLibdetails(libid: string, signal?: AbortSignal) {
  try {
    const libdetails = await axios.get(`api/getlibdetails/${libid}`, {
      signal,
      withCredentials: true,
    }); 
    console.log(libdetails.data.librariesDeatils,"details")
    return libdetails.data.librariesDeatils;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled");
      return null; 
    }
    throw error; 
  }
}
