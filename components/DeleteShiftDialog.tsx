"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { apiResponse, DelteShift } from "@/lib/serveraction";
import { toast } from "sonner";

type prop = {
  isopen: boolean;
  onchangeopen: (val: boolean) => void;
  shiftid: string;
  libid: string;
};

const DeleteSpaceDialog = ({ isopen, onchangeopen, shiftid, libid }: prop) => { 
    const [pending,setpending]=useState<boolean>(false); 
  const handleDelete = async (id: string) => { 
    setpending(true)
    try {  
        const del= await DelteShift(shiftid,libid); 
        
        if(del.success){
            toast.success("shift is delted successfully",{duration:2000})
            onchangeopen(false)
        }else if(!del.success){ 
            // @ts-ignore
            toast.error(del?.error ?? "Uncatched error ")  
        } 
    } catch (error) {
      toast.error("Unexpected error");

    }finally{
         setpending(false)
    }
  };
  return (
    <AlertDialog open={isopen}>
      {isopen && (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              Space and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="text-white bg-blue-500  hover:bg-blue-600"
              onClick={() => onchangeopen(false)} 
              disabled={pending}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="text-white  bg-red-500" disabled={pending} onClick={()=>handleDelete(shiftid)}>
              {pending ? "Deleting Space" : "Delete Space"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default React.memo(DeleteSpaceDialog);
