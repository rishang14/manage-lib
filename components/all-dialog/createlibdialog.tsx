"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock, Trash2, Plus } from "lucide-react"
import { useDialogstore } from "@/store/StateStore"
import type { Shift } from "@/common/types"

const CreateLibraryDialog = () => {
  // Form states
  const [libraryName, setLibraryName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isDialogOpen, setIsdialogOpen } = useDialogstore()

  // Dummy default shifts
  const [shifts, setShifts] = useState<Shift[]>([
    {
      id: crypto.randomUUID(),
      name: "Morning Shift",
      startTime: "08:00",
      endTime: "12:00",
    },
    {
      id: crypto.randomUUID(),
      name: "Evening Shift",
      startTime: "13:00",
      endTime: "17:00",
    },
  ])

  // Handlers
  const addShift = () => {
    setShifts([...shifts, { id: crypto.randomUUID(), name: "", startTime: "", endTime: "" }])
  }

  const removeShift = (id: string) => {
    setShifts(shifts.filter((s) => s.id !== id))
  }

  const updateShift = (id: string, field: keyof Shift, value: string) => {
    setShifts(shifts.map((shift) => (shift.id === id ? { ...shift, [field]: value } : shift)))
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Library Created:", { libraryName, shifts })
      setIsSubmitting(false)
      setIsdialogOpen(false)
    }, 1000)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsdialogOpen}>
      <DialogContent className="md:min-w-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Library</DialogTitle>
          <DialogDescription>Set up a new library with custom shift schedules for your team</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2 ">
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

          <div className="space-y-2">
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

            <Card className="border-slate-200 dark:border-slate-700">
              <CardContent className="p-4">
                {/* Header row for larger screens */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 mb-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="col-span-2 text-sm font-medium text-muted-foreground">#</div>
                  <div className="col-span-4 text-sm font-medium text-muted-foreground">Shift Name</div>
                  <div className="col-span-2 text-sm font-medium text-muted-foreground">Start Time</div>
                  <div className="col-span-2 text-sm font-medium text-muted-foreground">End Time</div>
                  <div className="col-span-2 text-sm font-medium text-muted-foreground">Actions</div>
                </div>

                {/* Shift rows */}
                <div className="space-y-3">
                  {shifts.map((shift, index) => (
                    <div
                      key={shift.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-3  p-3 md:p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {/* Mobile: Shift number and delete button */}
                      <div className="flex items-center justify-between md:hidden mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Shift {index + 1}</span>
                        {shifts.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeShift(shift.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 w-8 p-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {/* Desktop: Shift number */}
                      <div className="hidden md:flex md:col-span-1 items-center">
                        <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                      </div>

                      {/* Shift Name */}
                      <div className="md:col-span-5">
                        <Label className="text-xs text-muted-foreground md:hidden">Shift Name</Label>
                        <Input
                          value={shift.name}
                          onChange={(e) => updateShift(shift.id, "name", e.target.value)}
                          placeholder="e.g., Morning Shift"
                          className="mt-1 md:mt-0"
                        />
                      </div>

                      {/* Time inputs - side by side on mobile, separate columns on desktop */}
                      <div className="grid grid-cols-2 gap-2 md:contents">
                        <div className="md:col-span-2">
                          <Label className="text-xs text-muted-foreground md:hidden">Start Time</Label>
                          <Input
                            type="time"
                            value={shift.startTime}
                            onChange={(e) => updateShift(shift.id, "startTime", e.target.value)}
                            className="mt-1 md:mt-0"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label className="text-xs text-muted-foreground md:hidden">End Time</Label>
                          <Input
                            type="time"
                            value={shift.endTime}
                            onChange={(e) => updateShift(shift.id, "endTime", e.target.value)}
                            className="mt-1 md:mt-0"
                          />
                        </div>
                      </div>

                      {/* Desktop: Delete button */}
                      <div className="hidden md:flex md:col-span-2 items-center">
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
                    </div>
                  ))}
                </div>

                <div className="mt-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <Button
                    variant="outline"
                    onClick={addShift}
                    className="w-full border-dashed border-2 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Shift
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => setIsdialogOpen(false)} disabled={isSubmitting}>
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

export default CreateLibraryDialog
