"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Clock } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

interface Shift {
  id: string
  name: string
  startTime: string
  endTime: string
}

// interface CreateLibraryDialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

export function CreateLibraryDialog({ open, onOpenChange }: any) {
  const [libraryName, setLibraryName] = useState("")
  const [shifts, setShifts] = useState<Shift[]>([
    { id: "1", name: "Morning Shift", startTime: "09:00", endTime: "17:00" },
  ]) 

  console.log(shifts,"shifts")
  const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

  const addShift = () => {
    const newShift: Shift = {
      id: Date.now().toString(),
      name: `Shift ${shifts.length + 1}`,
      startTime: "09:00",
      endTime: "17:00",
    }
    setShifts([...shifts, newShift])
  }

  const removeShift = (id: string) => {
    if (shifts.length > 1) {
      setShifts(shifts.filter((shift) => shift.id !== id))
    }
  }

  const updateShift = (id: string, field: keyof Shift, value: string) => {
    setShifts(shifts.map((shift) => (shift.id === id ? { ...shift, [field]: value } : shift)))
  }

  const handleSubmit = async () => {
    // if (!libraryName.trim()) {
    //   toast({
    //     title: "Error",
    //     description: "Please enter a library name",
    //     variant: "destructive",
    //   })
    //   return
    // }

    // if (shifts.some((shift) => !shift.name.trim() || !shift.startTime || !shift.endTime)) {
    //   toast({
    //     title: "Error",
    //     description: "Please fill in all shift details",
    //     variant: "destructive",
    //   })
    //   return
    // }

    setIsSubmitting(true)

    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1500))

    // toast({
    //   title: "Success!",
    //   description: `Library "${libraryName}" created with ${shifts.length} shift${shifts.length > 1 ? "s" : ""}`,
    // })

    // Reset form
    // setLibraryName("")
    // setShifts([{ id: "1", name: "Morning Shift", startTime: "09:00", endTime: "17:00" }])
    // setIsSubmitting(false)
    // onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Library</DialogTitle>
          <DialogDescription>Set up a new library with custom shift schedules for your team</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Library Name */}
          <div className="space-y-2">
            <Label htmlFor="library-name" className="text-sm font-medium">
              Library Name
            </Label>
            <Input
              id="library-name"
              placeholder="Enter library name..."
              value={libraryName}
              onChange={(e) => setLibraryName(e.target.value)}
              className="text-base"
            />
          </div>

          {/* Shifts Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Shift Schedule</Label>
                <p className="text-sm text-muted-foreground">Configure your team's working shifts</p>
              </div>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {shifts.length} shift{shifts.length > 1 ? "s" : ""}
              </Badge>
            </div>

            <div className="space-y-3">
              {shifts.map((shift, index) => (
                <Card key={shift.id} className="border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-medium">Shift {index + 1}</CardTitle>
                      {shifts.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeShift(shift.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor={`shift-name-${shift.id}`} className="text-sm">
                        Shift Name
                      </Label>
                      <Input
                        id={`shift-name-${shift.id}`}
                        value={shift.name}
                        onChange={(e) => updateShift(shift.id, "name", e.target.value)}
                        placeholder="e.g., Morning Shift"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`start-time-${shift.id}`} className="text-sm">
                          Start Time
                        </Label>
                        <Input
                          id={`start-time-${shift.id}`}
                          type="time"
                          value={shift.startTime}
                          onChange={(e) => updateShift(shift.id, "startTime", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`end-time-${shift.id}`} className="text-sm">
                          End Time
                        </Label>
                        <Input
                          id={`end-time-${shift.id}`}
                          type="time"
                          value={shift.endTime}
                          onChange={(e) => updateShift(shift.id, "endTime", e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={addShift}
              className="w-full border-dashed border-2 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Another Shift
            </Button>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
            {isSubmitting ? "Creating..." : "Create Library"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
