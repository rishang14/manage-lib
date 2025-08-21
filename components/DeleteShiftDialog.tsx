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

type prop = {
  isopen: boolean;
  onchangeopen: (val: boolean) => void;
  shiftid: string;
  libid: string;
};

const DeleteSpaceDialog = ({ isopen, onchangeopen, shiftid, libid }: prop) => {
  const handleDelete = async (id: string) => {
    try {
    } catch (error) {}
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
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="text-white  bg-red-500">
              {false ? "Deleting Space" : "Delete Space"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default React.memo(DeleteSpaceDialog);
