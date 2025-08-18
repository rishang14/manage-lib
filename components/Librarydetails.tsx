"use client";
import { SeatManagementTable } from "@/components/SeatManagementTable";
import { getLibdetails } from "@/lib/serverClienthelper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SeatStatistics } from "@/components/SeatStatistics";
// import { SeatManagementTable } from "@/components/seat-management-table"
import { AddSeatForm } from "@/components/AddSeat";
import { ShiftManagement } from "@/components/Shift";
import {
  BarChart3,
  Plus,
  Users,
  Clock,
  Settings,
  Shield,
  Building2,
} from "lucide-react";
import Libraryoverview from "./Libraryoverview";
// import type { Seat } from "@/common/types"

// import type { Seat } from "@/types"

// Mock data for demonstration
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

// Mock data
const mockSeats = [
  {
    id: "1",
    number: "A-001",
    location: "Floor 1, Section A",
    status: "full",
    createdAt: "2024-01-15",
    shifts: [
      {
        id: "1",
        type: "morning",
        startTime: "09:00",
        endTime: "13:00",
        member: {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          phone: "+1234567890",
          joinDate: "2024-01-15",
          status: "active",
        },
      },
      {
        id: "2",
        type: "afternoon",
        startTime: "13:00",
        endTime: "17:00",
        member: {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+1234567891",
          joinDate: "2024-02-20",
          status: "active",
        },
      },
      {
        id: "3",
        type: "evening",
        startTime: "17:00",
        endTime: "21:00",
        member: {
          id: "3",
          name: "Bob Johnson",
          email: "bob@example.com",
          phone: "+1234567892",
          joinDate: "2024-03-10",
          status: "active",
        },
      },
    ],
  },
  {
    id: "2",
    number: "A-002",
    location: "Floor 1, Section A",
    status: "partially_filled",
    createdAt: "2024-01-16",
    shifts: [
      {
        id: "4",
        type: "morning",
        startTime: "09:00",
        endTime: "13:00",
        member: {
          id: "4",
          name: "Alice Brown",
          email: "alice@example.com",
          phone: "+1234567893",
          joinDate: "2024-01-20",
          status: "active",
        },
      },
      { id: "5", type: "afternoon", startTime: "13:00", endTime: "17:00" },
      { id: "6", type: "evening", startTime: "17:00", endTime: "21:00" },
    ],
  },
  {
    id: "3",
    number: "B-001",
    location: "Floor 2, Section B",
    status: "empty",
    createdAt: "2024-01-17",
    shifts: [
      { id: "7", type: "morning", startTime: "09:00", endTime: "13:00" },
      { id: "8", type: "afternoon", startTime: "13:00", endTime: "17:00" },
      { id: "9", type: "evening", startTime: "17:00", endTime: "21:00" },
    ],
  },
];

const Libdetailspage = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState("overview");

  //   const { id } = useParams();

  console.log(id, "libraryid");
  const { data, isLoading, error } = useQuery({
    queryKey: ["librarydetails", id],
    queryFn: () => getLibdetails(id as string),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
    placeholderData: (previousData) => previousData,
  });
  console.log(data, "data for the libdetails page");

  if (isLoading) return <p>isLoading</p>;

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "add-seat", label: "Add Seat", icon: Plus },
    // { id: "members", label: "Members", icon: Users },
    { id: "shifts", label: "Shifts", icon: Clock },
    { id: "manage", label: "Manage", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-900">
      <header className="bg-white dark:bg-neutral-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Seat Management
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="text-green-600 border-green-200"
              >
                Online
              </Badge>
              <Link href={`/library/${id}/admin`}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === item.id
                    ? "border-blue-600 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-6">
        {activeTab === "overview" && <Libraryoverview mockSeats={mockSeats} />}
        {activeTab === "add-seat" && (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <AddSeatForm />
          </div>
        )}

        {activeTab === "shifts" && (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <ShiftManagement />
          </div>
        )}

        {activeTab === "manage" && (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            {/* @ts-ignore */}
            <SeatManagementTable seats={mockSeattabledata} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Libdetailspage;
