"use client";

import { SeatManagementTable } from "@/components/SeatManagementTable";
import { SeatStatistics } from "@/components/SeatStatistics";
import { getLibdetails } from "@/lib/serverClienthelper";
import { useQuery } from "@tanstack/react-query";
 import { useParams } from 'next/navigation';
// import type { Seat } from "@/types"

// Mock data for demonstration
const mockSeats = Array.from({ length: 120 }, (_, i) => {
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

const Page = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["librarydetails", id],
    queryFn: () => getLibdetails(id as string), 
    // basically it will give me data from cache  
    staleTime: 1000 * 60 * 5,
  });
  console.log(data, "data for the libdetails page");
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* @ts-ignore */}
        <SeatStatistics seats={mockSeats} />
        {/* @ts-ignore */}
        <SeatManagementTable seats={mockSeats} />
      </div>
    </div>
  );
};

export default Page;
