"use client";

import { PrefectchLibdetails } from "@/lib/serverquery";
import { useQueryClient } from "@tanstack/react-query";
import {  ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react"; 
import Libcardmenu from "./Libcardmenu";
import { useSession } from "next-auth/react";
import { libroles } from "@/common/types";


export const PrefectchLibdetailsCard = ({ libid }: { libid: string }) => {   
  const {data}=useSession(); 
  console.log(data)
  const userrole= data?.user.libdetails.find((i:libroles) => i.libid === libid ); 
  // get the queryclient to know where the data is stored and for the cache
  const queryClinet = useQueryClient(); 
  // to know ongoing request it is builtin browser func  
  const controller = useRef<AbortController | null>(null); 
  // to know about the current timing 
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <div
      className="flex gap-2 flex-1 justify-end items-center "
      onMouseEnter={() => {
        timerRef.current = setTimeout(() => {
          controller.current = PrefectchLibdetails(queryClinet, libid);
        }, 200);
      }} 
      onMouseLeave={() => { 
        // clear the timer if mouse got remvoved before 200 ms 
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        // also  Abort the request if it already started
        controller.current?.abort();
      }}
    >  
      <Link href={`/library/${libid}`}>
        <ExternalLink className="h-5 w-5  text-cyan-700" />
      </Link>
   { userrole && userrole.role=== "ADMIN"  &&  <Libcardmenu libid={libid as string} /> }
    </div>
  );
};
