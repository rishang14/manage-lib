
import axios from "axios";

export async function getLibdetails(libid: string, signal?: AbortSignal) { 
  console.log("libid",libid)
  try {
    const libdetails = await axios.get(`/api/getlibdetails/${libid}`, {
      signal,
      withCredentials: true,
    }); 
    console.log(libdetails.data.librariesDeatils,"details")
    return libdetails.data.librariesDeatils;
  } catch (error) { 
    console.log(error,"error from the libdetails data")
    if (axios.isCancel(error)) {
      console.log("Request canceled");
      throw error;
    }
    throw error; 
  }
}
