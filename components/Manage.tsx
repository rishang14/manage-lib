import React from "react";
import { shiftschemaInput } from "@/common/types";
import { makeQueryClient } from "@/lib/serverquery";
import { allbookingAndSeatdetails } from "@/lib/serveraction";
import { dehydrate, } from "@tanstack/react-query";
import { Manageclient } from "./ManageClinet";
type prop = {
  libid: string;
  shifts: shiftschemaInput[];
};

const Manage = async ({ libid, shifts }: prop) => {
  const queryClient = makeQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["libbookingdetails", libid],
    queryFn: () => allbookingAndSeatdetails(libid, 10, 0),
  });
  const dehydratedClinet = dehydrate(queryClient);
  return (
    <div className="bg-white dark:bg-neutral-950 max-w-7xl mx-auto px-6 py-6 mt-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
     <Manageclient  libid={libid} shifts={shifts} dehydratedState={dehydratedClinet}/>
    </div>
  );
};

export default Manage;
