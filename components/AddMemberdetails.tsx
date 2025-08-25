"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, User, CreditCard, MapPin, Clock } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AddMemberDialogParams } from "@/common/types";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  props: AddMemberDialogParams;
}

interface BookingRequest {
  seatId: string;
  shiftIds: string[];
  date: Date;
  member: {
    name: string;
    phone: string;
  };
  payment: {
    amount: number;
    method: string;
    status: string;
    description: string;
  };
}

// Mock data - replace with your actual data
const availableSeats = [
  { id: "1", name: "Seat A1" },
  { id: "2", name: "Seat A2" },
  { id: "3", name: "Seat B1" },
];

const availableShifts = [
  { id: "1", name: "Morning (6:00 AM - 12:00 PM)", price: 500 },
  { id: "2", name: "Afternoon (12:00 PM - 6:00 PM)", price: 400 },
  { id: "3", name: "Evening (6:00 PM - 10:00 PM)", price: 300 },
];

// Declare BookingRequestSchema
const BookingRequestSchema = z.object({
  seatId: z.string(),
  shiftIds: z.array(z.string()),
  date: z.date(),
  member: z.object({
    name: z.string(),
    phone: z.string(),
  }),
  payment: z.object({
    amount: z.number(),
    method: z.string(),
    status: z.string(),
    description: z.string(),
  }),
});

export function AddMemberDialog({
  open,
  onOpenChange,
  props,
}: BookingDialogProps) {
  const [selectedShifts, setSelectedShifts] = useState<string[]>([]);

  const form = useForm<BookingRequest>({
    resolver: zodResolver(BookingRequestSchema),
    defaultValues: {
      seatId: "",
      shiftIds: [],
      date: new Date(),
      member: {
        name: "",
        phone: "",
      },
      payment: {
        amount: 0,
        method: "cash",
        status: "pending",
        description: "",
      },
    },
  });

  const selectedSeat = availableSeats.find(
    (seat) => seat.id === form.watch("seatId")
  );
  const selectedShiftDetails = availableShifts.filter((shift) =>
    selectedShifts.includes(shift.id)
  );
  const totalAmount = selectedShiftDetails.reduce(
    (sum, shift) => sum + shift.price,
    0
  );

  const handleShiftToggle = (shiftId: string) => {
    const updatedShifts = selectedShifts.includes(shiftId)
      ? selectedShifts.filter((id) => id !== shiftId)
      : [...selectedShifts, shiftId];

    setSelectedShifts(updatedShifts);
    form.setValue("shiftIds", updatedShifts);
    form.setValue(
      "payment.amount",
      availableShifts
        .filter((shift) => updatedShifts.includes(shift.id))
        .reduce((sum, shift) => sum + shift.price, 0)
    );
  };

  const onSubmit = (data: BookingRequest) => {
    console.log("Booking data:", data);
    onOpenChange(false);
    form.reset();
    setSelectedShifts([]);
  };

  return (
   <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-semibold">Add New Member</DialogTitle>
          <DialogDescription>Register a new member for the selected seat and shift</DialogDescription>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Seat {props.seatNumber}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {props.shiftName}
            </Badge>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              {/* Member Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Member Details</h3>
                </div>

                <div className="space-y-4 pl-7">
                  <FormField
                    control={form.control}
                    name="member.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter member's full name" {...field} />
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
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Payment Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Payment Details</h3>
                </div>

                <div className="space-y-4 pl-7">
                  <div className="grid grid-cols-2 gap-4">
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
                              {...field}
                              onChange={(e) => field.onChange(Number(e.target.value))}
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
                                <SelectValue placeholder="Select method" />
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
                  </div>

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
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Payment notes or description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Register Member</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

