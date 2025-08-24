 "use client"

import React, { SetStateAction, Suspense } from "react";
import ShowMemberDialog from "./ShowMemberDetailsDialog";
import { getmemberdetailsasperTheseat, getshifts } from "@/lib/serveraction";
import { SeatShiftResult, shiftschemaInput } from "@/common/types";
import { useQuery } from "@tanstack/react-query";

type prop = {
  selectedSeat: string;
  setSelectedSeat:  React.Dispatch<React.SetStateAction<string | null>>;
  libid: string; 
  shifts:shiftschemaInput[], 
  seatNum:Number
}; 

const ShowMemberDialogWrapper = async ({
  selectedSeat,
  setSelectedSeat,
  libid, 
  shifts, 
  seatNum
}: prop) => { 
   const {data, isError ,error,isLoading ,}=useQuery({
    queryKey:["seatdetails",selectedSeat], 
    queryFn:()=>getmemberdetailsasperTheseat(selectedSeat,libid), 
    enabled:!!selectedSeat
   }) 

   if(isError){
    alert("something went wrong"); 

   } 

   if(isLoading){
    return <p className="text-white">loading </p>
   }
  return ( 
      <ShowMemberDialog
      selectedSeat={selectedSeat}
      setSelectedSeat={setSelectedSeat}
      member={data}
      shifts={shifts}
      libid={libid} 
      seatNum={seatNum}
    />
  );
};

export default ShowMemberDialogWrapper;
