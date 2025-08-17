import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building2, Users, Clock } from "lucide-react"
import type { Seat } from "@/common/types"

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
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <div>
                <CardTitle className="text-lg font-semibold">Seat Overview</CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400">Current occupancy status</p>
              </div>
            </div>
            <Badge variant="secondary">{occupancyRate}% Occupied</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{totalSeats}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Total</div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{fullyOccupiedSeats}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Full</div>
            </div>
            <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <div className="text-2xl font-bold text-amber-600">{partiallyFilledSeats}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Partial</div>
            </div>
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-slate-500">{emptySeats}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Empty</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Utilization</span>
              <span>
                {fullyOccupiedSeats + partiallyFilledSeats}/{totalSeats}
              </span>
            </div>
            <Progress value={occupancyRate} className="h-2" />
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Total Members</span>
            </div>
            <span className="text-lg font-bold text-blue-600">{totalMembers}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <div>
              <CardTitle className="text-lg font-semibold">Shift Occupancy</CardTitle>
              <p className="text-sm text-slate-600 dark:text-slate-400">Breakdown by time slots</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(shiftStats).map(([shiftType, stats]) => {
              const occupancyPercent = Math.round((stats.occupied / stats.total) * 100)

              return (
                <div key={shiftType} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium capitalize">{shiftType}</h3>
                    <Badge
                      variant="outline"
                      className={
                        shiftType === "morning"
                          ? "text-amber-600 border-amber-200"
                          : shiftType === "afternoon"
                            ? "text-blue-600 border-blue-200"
                            : "text-purple-600 border-purple-200"
                      }
                    >
                      {occupancyPercent}%
                    </Badge>
                  </div>

                  <div className="text-center mb-3">
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      {stats.occupied}/{stats.total}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">occupied</div>
                  </div>

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
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
