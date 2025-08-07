import { Button } from "@/components/ui/button"
import { SharedLibraryCard } from "./shared-library-card"
import { Users, Plus } from 'lucide-react'

interface SharedLibrary {
  id: number
  name: string
  owner: string
  location: string
  myRole: string
  totalSeats: number
  occupiedSeats: number
  color: string
}

interface SharedLibrariesSectionProps {
  libraries: SharedLibrary[]
}

export function SharedLibrariesSection({ libraries }: SharedLibrariesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-foreground flex items-center">
          <Users className="h-6 w-6 text-blue-500 mr-2" />
          Shared Libraries
        </h3>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Join Library
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {libraries.map((library) => (
          <SharedLibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  )
}