"use client"
import React, { useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Ellipsis, PlusCircle, Settings } from "lucide-react";
import AddmanagerDialog from "./AddmanagerDialog";
import { Session } from "next-auth";
 
type prop={
    libid:string, 
}

const Libcardmenu = ({libid}:prop) => { 
    const [openaddmanagerDialog,setopenADDmanagerDialog]=useState(false) 
    
  return ( 
    <>
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" cursor-pointer"
          size="icon"
        >
          <Ellipsis size={40}  strokeWidth={0.75} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col ">
        <DropdownMenuLabel className=" flex gap-2 items-center">
          <Settings className="h-4 w-4" /> Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer " onClick={()=>setopenADDmanagerDialog(true)}>
            <PlusCircle className="" /> Add Manager
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>  
     <AddmanagerDialog isopen={openaddmanagerDialog} setopen={setopenADDmanagerDialog} libid={libid}/>
    </>
  );
};

export default Libcardmenu;
