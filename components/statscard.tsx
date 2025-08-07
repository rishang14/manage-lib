import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, UserCheck, BookOpen } from 'lucide-react'

interface StatsCardsProps {
  totalRevenue: number
  occupancyRate: number
  totalSeats: number
  libraryCount: number
}

export function StatsCards({ totalRevenue, occupancyRate, totalSeats, libraryCount }: StatsCardsProps) {
  const stats = [
    {
      label: "Monthly Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      bgColor: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600"
    },
    {
      label: "Occupancy Rate",
      value: `${occupancyRate}%`,
      icon: TrendingUp,
      bgColor: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600"
    },
    {
      label: "Total Seats",
      value: totalSeats.toString(),
      icon: UserCheck,
      bgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600"
    },
    {
      label: "My Libraries",
      value: libraryCount.toString(),
      icon: BookOpen,
      bgColor: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}