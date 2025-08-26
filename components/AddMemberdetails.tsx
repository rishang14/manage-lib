"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AddMemberDialogParams, BookingRequestSchema, CreateBookingInput, shiftschemaInput } from "@/common/types";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  MapPin,
  User,
} from "lucide-react";
import { Progress } from "./ui/progress";
import { Checkbox } from "./ui/checkbox";

interface BookingDialogProps {
  open: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  props: AddMemberDialogParams; 
  shifts:shiftschemaInput[]
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

// Declare BookingRequestSchema


export function AddMemberDialog({ open, onChange, props ,shifts}: BookingDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const form = useForm({
    resolver: zodResolver(BookingRequestSchema),
    defaultValues: {
      member: {
        name: "",
        phone: "",
      },
      payment: {
        startMonth: "", // Current month in YYYY-MM format
        duration: 1,
        amount: 500,
        paid: false,
      },
      shifts:[],
    },
  });

  const validateCurrentStep = async () => {
    if (currentStep === 1) {
      return await form.trigger(["member.name", "member.phone"]);
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: CreateBookingInput) => {
  
    console.log("Member registration data:", data);
  };

  const handleopenchange = () => {
    onChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleopenchange}>
      {open && (
        <DialogContent className="max-w-md">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-semibold">
              Add New Member
            </DialogTitle>
            <DialogDescription>
              {currentStep === 1
                ? "Enter member details"
                : "Configure payment information"}
            </DialogDescription>

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

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
                <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <Progress
                value={(currentStep / totalSteps) * 100}
                className="h-2"
              />
            </div>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2">
                    <User className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Member Details</h3>
                  </div>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="member.name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter member's full name"
                              {...field}
                            />
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
                            <Input
                              placeholder="Enter phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> 

                   <FormField
  control={form.control}
  name="shifts"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Select Shifts</FormLabel>
      <div className="space-y-2 border rounded-lg p-3 bg-muted/20">
        {shifts.map((shift:shiftschemaInput) => { 
          // @ts-ignore
          const isSelected =   field.value?.includes(shift?.id );

          return (
            <FormItem
              key={shift.id}
              className={`flex items-center gap-2 p-2 rounded-md ${
                isSelected ? "bg-primary/10 border border-primary/20" : ""
              }`}
            >
              <FormControl>
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([...(field.value || []), shift.id]);
                    } else {
                      field.onChange(
                        field.value?.filter((id) => id !== shift.id)
                      );
                    }
                  }}
                />
              </FormControl>
              <FormLabel>{shift.name}</FormLabel>
            </FormItem>
          );
        })}
      </div>
      <FormMessage />
    </FormItem>
  )}
/> 
                  </div>
                </div> 
                
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                  </div>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="payment.startMonth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Month</FormLabel>
                          <FormControl>
                            <Input type="month" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="payment.duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration (Months)</FormLabel>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(Number(value))
                              }
                              value={field.value?.toString()}
                              defaultValue={field.value?.toString()}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 Month</SelectItem>
                                <SelectItem value="3">3 Months</SelectItem>
                                <SelectItem value="6">6 Months</SelectItem>
                                <SelectItem value="12">12 Months</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="payment.paid"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) =>
                                field.onChange(checked === true)
                              }
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Payment Completed</FormLabel>
                            <p className="text-sm text-muted-foreground">
                              Check if the payment has been received
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={currentStep > 1 ? handlePrevious : handleopenchange}
                  className="flex items-center gap-2"
                >
                  {currentStep === 1 ? (
                    "Cancel"
                  ) : (
                    <>
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </>
                  )}
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">Register Member</Button>
                )}
              </div>
            </form>
          </Form>
        </DialogContent>
      )}
    </Dialog>
  );
}
