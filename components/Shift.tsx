"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, Plus, Sun, Sunset, Moon, Edit, Trash2 } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

interface ShiftTemplate {
  id: string
  type: "morning" | "afternoon" | "evening"
  startTime: string
  endTime: string
  name: string
}

const defaultShifts: ShiftTemplate[] = [
  { id: "1", type: "morning", startTime: "09:00", endTime: "13:00", name: "Morning Shift" },
  { id: "2", type: "afternoon", startTime: "13:00", endTime: "17:00", name: "Afternoon Shift" },
  { id: "3", type: "evening", startTime: "17:00", endTime: "21:00", name: "Evening Shift" },
]

export function ShiftManagement() {
  const [shifts, setShifts] = useState<ShiftTemplate[]>(defaultShifts)
  const [formData, setFormData] = useState({
    name: "",
    type: "morning" as "morning" | "afternoon" | "evening",
    startTime: "",
    endTime: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newShift: ShiftTemplate = {
      id: Date.now().toString(),
      ...formData,
    }

    setShifts((prev) => [...prev, newShift])
    setFormData({ name: "", type: "morning", startTime: "", endTime: "" })
    setIsSubmitting(false)

    // toast({
    //   title: "Shift Created Successfully",
    //   description: `${formData.name} has been added to the system`,
    // })
  }

  const getShiftIcon = (type: string) => {
    switch (type) {
      case "morning":
        return <Sun className="w-4 h-4" />
      case "afternoon":
        return <Sunset className="w-4 h-4" />
      case "evening":
        return <Moon className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getShiftColor = (type: string) => {
    switch (type) {
      case "morning":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      case "afternoon":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "evening":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const handleDeleteShift = (shiftId: string) => {
    setShifts((prev) => prev.filter((shift) => shift.id !== shiftId))
    // toast({
    //   title: "Shift Deleted",
    //   description: "Shift has been removed from the system",
    // })
  }

  const handleEditShift = (shiftId: string) => {
    const shift = shifts.find((s) => s.id === shiftId)
    if (shift) {
      setFormData({
        name: shift.name,
        type: shift.type,
        startTime: shift.startTime,
        endTime: shift.endTime,
      })
    //   toast({
    //     title: "Edit Mode",
    //     description: "Shift details loaded for editing",
    //   })
    }
  }

  return (
    <div className="space-y-6">
      {/* Add New Shift Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Create New Shift</CardTitle>
              <p className="text-sm text-muted-foreground">Define working hours and shift patterns</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shift-name">Shift Name</Label>
                <Input
                  id="shift-name"
                  placeholder="e.g., Extended Morning"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shift-type">Shift Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: "morning" | "afternoon" | "evening") =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select shift type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-time">Start Time</Label>
                <Input
                  id="start-time"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, startTime: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-time">End Time</Label>
                <Input
                  id="end-time"
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, endTime: e.target.value }))}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating Shift..." : "Create Shift"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing Shifts */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <Clock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Active Shifts</CardTitle>
              <p className="text-sm text-muted-foreground">Current shift templates and schedules</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shifts.map((shift) => (
              <div key={shift.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getShiftIcon(shift.type)}
                    <h3 className="font-semibold">{shift.name}</h3>
                  </div>
                  <Badge className={getShiftColor(shift.type)}>{shift.type}</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">
                      {shift.startTime} - {shift.endTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {(() => {
                        const start = new Date(`2000-01-01T${shift.startTime}`)
                        const end = new Date(`2000-01-01T${shift.endTime}`)
                        const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
                        return `${diff}h`
                      })()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => handleEditShift(shift.id)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                    onClick={() => handleDeleteShift(shift.id)}
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}