import React from "react";
import { AddSeatForm } from "./AddSeat";
import { SeatManagementTable } from "./SeatManagementTable"; 
const mockSeattabledata = Array.from({ length: 120 }, (_, i) => {
  const seatNumber = i + 1;
  const shifts = [
    {
      id: `${seatNumber}-morning`,
      type: "morning" as const,
      startTime: "06:00",
      endTime: "12:00",
      member:
        Math.random() > 0.4
          ? {
              id: `member-${seatNumber}-morning`,
              name: `Member ${seatNumber}M`,
              phone: `+91 98765${String(seatNumber).padStart(5, "0")}`,
              email: `member${seatNumber}m@example.com`,
              paymentStatus:
                Math.random() > 0.8
                  ? "overdue"
                  : Math.random() > 0.6
                  ? "pending"
                  : "paid",
              paymentAmount: 2500,
              joinedAt: "2024-01-15",
            }
          : undefined,
    },
    {
      id: `${seatNumber}-afternoon`,
      type: "afternoon" as const,
      startTime: "12:00",
      endTime: "18:00",
      member:
        Math.random() > 0.5
          ? {
              id: `member-${seatNumber}-afternoon`,
              name: `Member ${seatNumber}A`,
              phone: `+91 98765${String(seatNumber + 1000).padStart(5, "0")}`,
              email: `member${seatNumber}a@example.com`,
              paymentStatus:
                Math.random() > 0.8
                  ? "overdue"
                  : Math.random() > 0.6
                  ? "pending"
                  : "paid",
              paymentAmount: 2500,
              joinedAt: "2024-01-20",
            }
          : undefined,
    },
    {
      id: `${seatNumber}-evening`,
      type: "evening" as const,
      startTime: "18:00",
      endTime: "23:00",
      member:
        Math.random() > 0.6
          ? {
              id: `member-${seatNumber}-evening`,
              name: `Member ${seatNumber}E`,
              phone: `+91 98765${String(seatNumber + 2000).padStart(5, "0")}`,
              email: `member${seatNumber}e@example.com`,
              paymentStatus:
                Math.random() > 0.8
                  ? "overdue"
                  : Math.random() > 0.6
                  ? "pending"
                  : "paid",
              paymentAmount: 2500,
              joinedAt: "2024-02-01",
            }
          : undefined,
    },
  ];

  const filledShifts = shifts.filter((s) => s.member).length;
  const status =
    filledShifts === 0
      ? "empty"
      : filledShifts === 3
      ? "full"
      : "partially_filled";

  return {
    id: `seat-${seatNumber}`,
    seatNumber,
    libraryId: "lib-1",
    shifts,
    status,
    createdAt: "2024-01-01",
  };
});

const Manage = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 max-w-7xl mx-auto px-6 py-6 mt-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
     {/* @ts-ignore */}
      <SeatManagementTable seats={mockSeattabledata} />
    </div>
  );
};

export default Manage;
