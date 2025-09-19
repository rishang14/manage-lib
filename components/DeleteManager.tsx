"use client";
import React, { useState } from "react";
import { AlertDialogAction } from "./ui/alert-dialog";
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogDescription,
} from "./ui/alert-dialog";
import { reomveManaager } from "@/lib/serveraction";
import { toast } from "sonner";

type prop = {
  deleteManagerId: any;
  setDeleteManagerId: any; 
  libid:string
};

const DeleteManager = ({ deleteManagerId, setDeleteManagerId,libid }: prop) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteManager = async (deleteManagerId: string) => {
    try {  
        setIsDeleting(true); 
          const res= await reomveManaager(libid,deleteManagerId); 
          if(res?.success){
            toast.success("Manager Removed Successfully") 
            setIsDeleting(false);
          }else{
            toast.error("Internal server Error") 
            setIsDeleting(false);
          }     
    } catch (error) {
        toast.error("Uncatched error"); 
        setIsDeleting(false);
    }
  };
  return (
    <AlertDialog
      open={!!deleteManagerId}
      onOpenChange={() => setDeleteManagerId(null)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Manager</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this manager from the library? This
            action cannot be undone. They will lose access to manage this
            library immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              deleteManagerId && handleDeleteManager(deleteManagerId)
            }
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? "Removing..." : "Remove Manager"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteManager;
