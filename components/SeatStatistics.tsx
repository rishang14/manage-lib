import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building2, Users, UserCheck, UserX, Clock, PieChart } from "lucide-react"
import { Seat } from "@/common/types"


interface SeatStatisticsProps {
  seats: Seat[]
}

export function SeatStatistics({ seats }: SeatStatisticsProps) {
  // Calculate overall statistics
  const totalSeats = seats.length
  const fullyOccupiedSeats = seats.filter((seat) => seat.status === "full").length
  const partiallyFilledSeats = seats.filter((seat) => seat.status === "partially_filled").length
  const emptySeats = seats.filter((seat) => seat.status === "empty").length

  // Calculate shift-wise statistics
  const shiftStats = {
    morning: {
      total: totalSeats,
      occupied: seats.filter((seat) => seat.shifts.find((s) => s.type === "morning" && s.member)).length,
    },
    afternoon: {
      total: totalSeats,
      occupied: seats.filter((seat) => seat.shifts.find((s) => s.type === "afternoon" && s.member)).length,
    },
    evening: {
      total: totalSeats,
      occupied: seats.filter((seat) => seat.shifts.find((s) => s.type === "evening" && s.member)).length,
    },
  }

  const totalMembers = seats.reduce((acc, seat) => {
    return acc + seat.shifts.filter((shift) => shift.member).length
  }, 0)

  const occupancyRate = Math.round(((fullyOccupiedSeats + partiallyFilledSeats) / totalSeats) * 100)

  return (
    <div className="space-y-6">
      {/* Main Seat Overview */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Seat Overview</CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400">Total capacity and current occupancy</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {occupancyRate}% Occupied
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Total Seats Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">{totalSeats}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Seats</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-1">{fullyOccupiedSeats}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Fully Occupied</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-amber-600 mb-1">{partiallyFilledSeats}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Partially Filled</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-slate-500 mb-1">{emptySeats}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Empty</div>
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span>Seat Utilization</span>
              <span>
                {fullyOccupiedSeats + partiallyFilledSeats} of {totalSeats} seats in use
              </span>
            </div>
            <div className="relative">
              <Progress value={occupancyRate} className="h-3" />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                {occupancyRate}%
              </div>
            </div>
          </div>

          {/* Member Count */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">Total Members</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Across all shifts</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-indigo-600">{totalMembers}</div>
          </div>
        </CardContent>
      </Card>

      {/* Shift-wise Detailed Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Shift-wise Occupancy</CardTitle>
              <p className="text-sm text-slate-600 dark:text-slate-400">Detailed breakdown by time slots</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(shiftStats).map(([shiftType, stats]) => {
              const occupancyPercent = Math.round((stats.occupied / stats.total) * 100)
              const remaining = stats.total - stats.occupied

              return (
                <div
                  key={shiftType}
                  className={`relative overflow-hidden rounded-xl p-6 ${
                    shiftType === "morning"
                      ? "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800"
                      : shiftType === "afternoon"
                        ? "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800"
                        : "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800"
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 opacity-10">
                    <PieChart className="w-20 h-20" />
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Clock
                          className={`w-5 h-5 ${
                            shiftType === "morning"
                              ? "text-amber-600"
                              : shiftType === "afternoon"
                                ? "text-blue-600"
                                : "text-purple-600"
                          }`}
                        />
                        <h3 className="font-bold text-lg capitalize text-slate-900 dark:text-slate-100">{shiftType}</h3>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          shiftType === "morning"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                            : shiftType === "afternoon"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        }`}
                      >
                        {occupancyPercent}%
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {stats.occupied}
                          <span className="text-lg text-slate-500">/{stats.total}</span>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">seats occupied</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg">
                          <UserCheck className="w-5 h-5 text-green-600 mx-auto mb-1" />
                          <div className="font-semibold text-green-700 dark:text-green-400">{stats.occupied}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Taken</div>
                        </div>
                        <div className="text-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg">
                          <UserX className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                          <div className="font-semibold text-slate-700 dark:text-slate-300">{remaining}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Available</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Progress
                          value={occupancyPercent}
                          className={`h-2 ${
                            shiftType === "morning"
                              ? "[&>div]:bg-amber-500"
                              : shiftType === "afternoon"
                                ? "[&>div]:bg-blue-500"
                                : "[&>div]:bg-purple-500"
                          }`}
                        />
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                          <span>0</span>
                          <span>{stats.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
