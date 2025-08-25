 "use client"

import React from "react";
import ShowMemberDialog from "./ShowMemberDetailsDialog";
import { getmemberdetailsasperTheseat, getshifts } from "@/lib/serveraction";
import { SeatShiftResult, shiftschemaInput } from "@/common/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient(); 

  queryClient.prefetchQuery({
     queryKey:["seatdetails",selectedSeat], 
    queryFn:()=>getmemberdetailsasperTheseat(selectedSeat,libid), 
    staleTime:6000*10
  })

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
