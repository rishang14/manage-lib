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
import { deleteSeat } from "@/lib/serveraction";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";


type prop = {
  isopen: boolean;
  onchangeopen: (val: boolean) => void;
  seatId: string;
  libid: string;
};

const DeleteSpaceDialog = ({ isopen, onchangeopen, seatId, libid }: prop) => {
  const [pending, setpending] = useState<boolean>(false);
  const queryClinet = useQueryClient();
  const handleDelete = async (seatid: string,) => { 
    setpending(true)
    try {
      const res = await deleteSeat(seatid, libid);

      if (res.success) {
        toast.success("seat Deleted Successfully", {
          duration: 2000,
        });
        queryClinet.invalidateQueries({
          queryKey: ["libbookingdetails", libid],
        }); 
        onchangeopen(false)
      }
    } catch (error) {
      toast.error("something went wrong ", { duration: 3000 });
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
              Seat and remove your data from our servers.
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
            <AlertDialogAction
              className="text-white  bg-red-500"
              disabled={pending}
              onClick={() => handleDelete(seatId)}
            >
              {pending ? "Deleting Seat" : "Delete Seat"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default React.memo(DeleteSpaceDialog);
