"use client";
import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";
import { SeatManagementTable } from "./SeatManagementTable";
import { shiftschemaInput } from "@/common/types";

type Props = {
  libid: string;
  shifts: shiftschemaInput[];
};

export function Manageclient({ libid, shifts }: Props) {
  return (
      <SeatManagementTable libid={libid} shifts={shifts} />
  );
}
