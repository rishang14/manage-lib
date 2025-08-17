"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building2, Users, AlertTriangle, TrendingUp, UserCheck } from "lucide-react"

// Mock data - replace with real data from your backend
const mockData = {
  totalLibraries: 3,
  totalSeats: 150,
  occupiedSeats: 127,
  totalMembers: 127,
  pendingPayments: 12,
  totalRevenue: 45600,
  activeManagers: 5,
}

const libraries = [
  {
    id: "1",
    name: "Central Library",
    totalSeats: 60,
    occupiedSeats: 52,
    manager: "John Doe",
    revenue: 18400,
  },
  {
    id: "2",
    name: "North Branch",
    totalSeats: 45,
    occupiedSeats: 38,
    manager: "Jane Smith",
    revenue: 15200,
  },
  {
    id: "3",
    name: "South Branch",
    totalSeats: 45,
    occupiedSeats: 37,
    manager: "Mike Johnson",
    revenue: 12000,
  },
]

export function AdminOverview() {
  const occupancyRate = Math.round((mockData.occupiedSeats / mockData.totalSeats) * 100)

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Libraries</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalLibraries}</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Seat Occupancy</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockData.occupiedSeats}/{mockData.totalSeats}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={occupancyRate} className="flex-1" />
              <span className="text-sm font-medium">{occupancyRate}%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockData.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{mockData.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Library Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Library Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {libraries.map((library) => {
              const occupancy = Math.round((library.occupiedSeats / library.totalSeats) * 100)
              return (
                <div key={library.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{library.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Manager: {library.manager}</span>
                      <Badge variant="outline">
                        <UserCheck className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {library.occupiedSeats}/{library.totalSeats} seats
                      </span>
                      <Badge variant={occupancy > 80 ? "default" : occupancy > 60 ? "secondary" : "outline"}>
                        {occupancy}%
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">₹{library.revenue.toLocaleString()} revenue</div>
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
