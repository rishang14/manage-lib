import { Button } from "@/components/ui/button"
import { LibraryCard } from "./library-card"
import { Crown, Eye } from 'lucide-react'

interface MyLibrary {
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

interface MyLibrariesSectionProps {
  libraries: MyLibrary[]
}

export function MyLibrariesSection({ libraries }: MyLibrariesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-foreground flex items-center">
          <Crown className="h-6 w-6 text-yellow-500 mr-2" />
          My Libraries
        </h3>
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  )
}