import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, MapPin, Eye } from 'lucide-react'

interface SharedLibraryCardProps {
  library: {
    id: number
    name: string
    owner: string
    location: string
    myRole: string
    totalSeats: number
    occupiedSeats: number
    color: string
  }
}

export function SharedLibraryCard({ library }: SharedLibraryCardProps) {
  const occupancyPercentage = (library.occupiedSeats / library.totalSeats) * 100

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${library.color} rounded-xl flex items-center justify-center`}>
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{library.name}</CardTitle>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{library.location}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">{library.myRole}</Badge>
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
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs">
                {library.owner.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">Owned by {library.owner}</span>
          </div>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}