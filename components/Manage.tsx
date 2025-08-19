import React from "react";
import { AddSeatForm } from "./AddSeat";
import { SeatManagementTable } from "./SeatManagementTable";

const Manage = ({ mockSeattabledata }: any) => {
  return (
    <div className="bg-white dark:bg-neutral-950 max-w-7xl mx-auto px-6 py-6 mt-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
      <SeatManagementTable seats={mockSeattabledata} />
    </div>
  );
};

export default Manage;
