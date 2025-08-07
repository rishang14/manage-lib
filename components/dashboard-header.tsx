import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Library Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          Manage your libraries and track performance
        </p>
      </div>
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        Add New Library
      </Button>
    </div>
  )
}
