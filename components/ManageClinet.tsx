"use client";
import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";
import { SeatManagementTable } from "./SeatManagementTable";
import { shiftschemaInput } from "@/common/types";

type Props = {
  libid: string;
  shifts: shiftschemaInput[];
  dehydratedState: DehydratedState;
};

export function Manageclient({ libid, shifts, dehydratedState }: Props) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <SeatManagementTable libid={libid} shifts={shifts} />
    </HydrationBoundary>
  );
}
