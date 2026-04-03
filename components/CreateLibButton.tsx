"use client";
import { Button } from "./ui/button";
import { MdOutlineCreate } from "react-icons/md";
import { useDialogstore } from "@/store/StateStore";

export const CreateLibButton = () => {
  const { setIsCreateLibdialogOpen } = useDialogstore();
  return (
    <Button
      className="bg-gray-100 text-neutral-800 shadow-2xl ring-2 ring-blue-200 transition duration-200 text-shadow-md active:scale-98"
      onClick={() => setIsCreateLibdialogOpen(true)}
    >
      <MdOutlineCreate /> Create new library
    </Button>
  );
};
