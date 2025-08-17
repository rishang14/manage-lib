"use client";
import { SeatManagementTable } from "@/components/SeatManagementTable";
import { getLibdetails } from "@/lib/serverClienthelper";
import { useQuery } from "@tanstack/react-query";
 import { useParams } from 'next/navigation'; 
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" 
import Link from "next/link";
import { SeatStatistics } from "@/components/SeatStatistics";
// import { SeatManagementTable } from "@/components/seat-management-table"
import { AddSeatForm } from "@/components/AddSeat";
import { ShiftManagement } from "@/components/Shift";
import { BarChart3, Plus, Users, Clock, Settings, Shield, Building2 } from "lucide-react"
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
]

const Page=()=> {
  const [activeTab, setActiveTab] = useState("overview") 

  const { id } = useParams();
 
  console.log(id,"libraryid")
  const { data, isLoading, error } = useQuery({
    queryKey: ["librarydetails", id],
    queryFn: () => getLibdetails(id as string),  
    staleTime:1000 * 60
  });
  console.log(data, "data for the libdetails page");

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "add-seat", label: "Add Seat", icon: Plus },
    // { id: "members", label: "Members", icon: Users },
    { id: "shifts", label: "Shifts", icon: Clock },
    { id: "manage", label: "Manage", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">WorkSpace Pro</h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">Seat Management</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
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
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome to WorkSpace Pro</h2>
                  <p className="text-blue-100 text-lg">Manage your workspace efficiently with real-time insights</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{mockSeats.length}</div>
                  <div className="text-blue-200 text-sm">Total Seats</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button
                onClick={() => setActiveTab("add-seat")}
                className="h-20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex-col gap-2"
                variant="outline"
              >
                <Plus className="w-6 h-6" />
                <span className="text-sm font-medium">Add New Seat</span>
              </Button>

              <Button
                onClick={() => setActiveTab("members")}
                className="h-20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex-col gap-2"
                variant="outline"
              >
                <Users className="w-6 h-6" />
                <span className="text-sm font-medium">Manage Members</span>
              </Button>

              <Button
                onClick={() => setActiveTab("shifts")}
                className="h-20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex-col gap-2"
                variant="outline"
              >
                <Clock className="w-6 h-6" />
                <span className="text-sm font-medium">Shift Planning</span>
              </Button>

              <Button
                onClick={() => setActiveTab("manage")}
                className="h-20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex-col gap-2"
                variant="outline"
              >
                <Settings className="w-6 h-6" />
                <span className="text-sm font-medium">View All Seats</span>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {Math.round((mockSeats.filter((seat) => seat.status === "full").length / mockSeats.length) * 100)}
                      %
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Members</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {mockSeats.reduce((acc, seat) => acc + seat.shifts.filter((shift) => shift.member).length, 0)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Available Seats</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {mockSeats.filter((seat) => seat.status === "empty").length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Detailed Analytics</h3> 
              {/* @ts-ignore */}
              <SeatStatistics seats={mockSeats} />
            </div>
          </div>
        )}

        {activeTab === "add-seat" && (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <AddSeatForm />
          </div>
        )}

        {/* {activeTab === "members" && (
          // <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          //   <MemberManagement />
          // </div>
        )} */}

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
  )
} 


export default Page;
