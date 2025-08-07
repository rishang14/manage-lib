import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"
import { BookOpen, MapPin, Settings } from 'lucide-react'

interface LibraryCardProps {
  library: {
    id: number
    name: string
    location: string
    totalSeats: number
    occupiedSeats: number
    monthlyRevenue: number
    managers: number
    status: string
    color: string
  }
}

export function LibraryCard({ library }: LibraryCardProps) {
  const occupancyPercentage = (library.occupiedSeats / library.totalSeats) * 100

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${library.color} rounded-xl flex items-center justify-center`}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{library.name}</CardTitle>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{library.location}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">Owner</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Seat Occupancy</span>
            <span className="font-medium">{library.occupiedSeats}/{library.totalSeats}</span>
          </div>
          {/* <Progress value={occupancyPercentage} className="h-2" /> */}
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Revenue</p>
            <p className="font-semibold text-foreground">₹{library.monthlyRevenue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Managers</p>
            <p className="font-semibold text-foreground">{library.managers}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <Badge variant="outline" className="text-green-600 border-green-600">
            {library.status}
          </Badge>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Manage
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
