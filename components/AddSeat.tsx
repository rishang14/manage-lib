"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, MapPin } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

export function AddSeatForm() {
  const [formData, setFormData] = useState({
    number: "",
    location: "",
    type: "standard",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // toast({
    //   title: "Seat Added Successfully",
    //   description: `Seat ${formData.number} has been added to ${formData.location}`,
    // })

    setFormData({ number: "", location: "", type: "standard" })
    setIsSubmitting(false)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <Plus className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Add New Seat</CardTitle>
            <p className="text-sm text-muted-foreground">Create a new seat in your workspace</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="seat-number">Seat Number</Label>
              <Input
                id="seat-number"
                placeholder="e.g., A-001"
                value={formData.number}
                onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seat-type">Seat Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select seat type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="e.g., Floor 2, Section A"
                className="pl-10"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Seat..." : "Add Seat"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}