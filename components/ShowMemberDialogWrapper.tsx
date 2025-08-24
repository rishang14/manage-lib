 "use client"

import React from "react";
import ShowMemberDialog from "./ShowMemberDetailsDialog";
import { getmemberdetailsasperTheseat, getshifts } from "@/lib/serveraction";
import { SeatShiftResult, shiftschemaInput } from "@/common/types";
import { useQuery } from "@tanstack/react-query";

type prop = {
  selectedSeat: string;
  setSelectedSeat:  React.Dispatch<React.SetStateAction<string | null>>;
  libid: string; 
  shifts:shiftschemaInput[], 
  seatNum:number
}; 

const ShowMemberDialogWrapper = ({
  selectedSeat,
  setSelectedSeat,
  libid, 
  shifts, 
  seatNum
}: prop) => {  

  if(!selectedSeat) return; 
   console.log(selectedSeat,"seatdetails in the wrapper ") 
   const {data, isError ,error,isLoading ,}=useQuery({
    queryKey:["seatdetails",selectedSeat], 
    queryFn:()=>getmemberdetailsasperTheseat(selectedSeat,libid), 
    enabled:!!selectedSeat
   }) 
  console.log(data,"data")
   if(isError){
    alert("something went wrong"); 
    console.log(error)
   } 
  console.log(data,"data")
   if(isLoading){
    return <p className="text-white">loading </p>
   }
  return ( 
      <ShowMemberDialog
      selectedSeatid={selectedSeat}
      setSelectedSeatId={setSelectedSeat}
      shifts={shifts}
      libid={libid} 
      seatNum={seatNum}
    />
  );
};

export default ShowMemberDialogWrapper;
