"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
// import { BookingRequestSchema, type BookingRequest } from "@/lib/schemas" 
 
export const MemberSchema = z.object({
  id: z.string(),
  libraryId: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
})

export const PaymentSchema = z.object({
  id: z.string(),
  amount: z.number().min(0, "Amount must be positive"),
  method: z.enum(["cash", "card", "upi", "bank_transfer"]),
  status: z.enum(["pending", "completed", "failed", "refunded"]),
  description: z.string().optional(),
  createdAt: z.date(),
  paidAt: z.date().optional(),
})

export const MemberdetailsData = MemberSchema.omit({
  id: true,
  libraryId: true,
})

export const paymentmode = PaymentSchema.omit({
  id: true,
  createdAt: true,
  paidAt: true,
})

export const BookingRequestSchema = z.object({
  seatId: z.string().min(1, "Please select a seat"),
  shiftIds: z.array(z.string()).min(1, "Please select at least one shift"),
  date: z.coerce.date(),
  member: MemberdetailsData,
  payment: paymentmode,
})

export type BookingRequest = z.infer<typeof BookingRequestSchema>
export type Member = z.infer<typeof MemberSchema>
export type Payment = z.infer<typeof PaymentSchema>


interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const availableShifts = [
  { id: "morning", name: "Morning (9:00 AM - 1:00 PM)" },
  { id: "afternoon", name: "Afternoon (1:00 PM - 5:00 PM)" },
  { id: "evening", name: "Evening (5:00 PM - 9:00 PM)" },
  { id: "night", name: "Night (9:00 PM - 1:00 AM)" },
]

const availableSeats = [
  { id: "A1", name: "Seat A1 - Window" },
  { id: "A2", name: "Seat A2 - Corner" },
  { id: "B1", name: "Seat B1 - Center" },
  { id: "B2", name: "Seat B2 - Quiet Zone" },
  { id: "C1", name: "Seat C1 - Premium" },
]

export function BookingMemberDialog({ open, onOpenChange }: BookingDialogProps) {
  const [selectedShifts, setSelectedShifts] = useState<string[]>([])

  const form = useForm<BookingRequest>({
    resolver: zodResolver(BookingRequestSchema),
    defaultValues: {
      seatId: "",
      shiftIds: [],
      date: new Date(),
      member: {
        name: "",
        email: "",
        phone: "",
        address: "",
        emergencyContact: "",
      },
      payment: {
        amount: 0,
        method: "cash",
        status: "pending",
        description: "",
      },
    },
  })

  const handleShiftToggle = (shiftId: string) => {
    const updatedShifts = selectedShifts.includes(shiftId)
      ? selectedShifts.filter((id) => id !== shiftId)
      : [...selectedShifts, shiftId]

    setSelectedShifts(updatedShifts)
    form.setValue("shiftIds", updatedShifts)
  }

  const onSubmit = (data: BookingRequest) => {
    console.log("Booking data:", data)
    // Handle form submission here
    onOpenChange(false)
    form.reset()
    setSelectedShifts([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:min-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Booking</DialogTitle>
          <DialogDescription>Fill out the form below to create a new seat booking request.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Booking Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Booking Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="seatId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seat Selection</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a seat" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {availableSeats.map((seat) => (
                              <SelectItem key={seat.id} value={seat.id}>
                                {seat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Booking Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel>Shift Selection</FormLabel>
                    <FormDescription className="mb-3">Select one or more shifts for your booking</FormDescription>
                    <div className="grid grid-cols-1 gap-2">
                      {availableShifts.map((shift) => (
                        <div
                          key={shift.id}
                          className={cn(
                            "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors",
                            selectedShifts.includes(shift.id) ? "bg-primary/10 border-primary" : "hover:bg-muted",
                          )}
                          onClick={() => handleShiftToggle(shift.id)}
                        >
                          <span className="text-sm font-medium">{shift.name}</span>
                          {selectedShifts.includes(shift.id) && (
                            <Badge variant="default" className="ml-2">
                              Selected
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    {form.formState.errors.shiftIds && (
                      <p className="text-sm font-medium text-destructive mt-2">
                        {form.formState.errors.shiftIds.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Member Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Member Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="member.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member.address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter full address" className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member.emergencyContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter emergency contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="payment.amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="payment.method"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                            <SelectItem value="upi">UPI</SelectItem>
                            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="payment.status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                            <SelectItem value="refunded">Refunded</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="payment.description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Optional description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Separator />

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Create Booking</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
