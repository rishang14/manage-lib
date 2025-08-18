"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Clock, Trash2, Plus } from "lucide-react";
import { useDialogstore } from "@/store/StateStore";
import type { Shift } from "@/common/types";
import { CreateLibraryInput, CreateLibrarySchema } from "@/common/types";
import { useFieldArray, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateLibraryDialog = () => {
  const { data,update } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDialogOpen, setIsdialogOpen } = useDialogstore();
  const form = useForm<CreateLibraryInput>({
    resolver: zodResolver(CreateLibrarySchema),
    defaultValues: {
      name: "",
      ownerId: "", 
      seat:1,
      shifts: [
        {
          name: "Morning shift",
          startTime: "06:00",
          endTime: "10:00",
        },
      ],
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  const { fields, remove, append } = useFieldArray({
    control,
    name: "shifts",
  });
 const router = useRouter();
 const onSubmit = async (formdata: CreateLibraryInput) => { 
  console.log(errors,"errors")
  try { 
    setIsSubmitting(true);
    console.log("i am invoked")
    console.log(formdata,"data")
    formdata.ownerId = data?.user.id;
    const res = await axios.post("/api/createLibrary", JSON.stringify(formdata)); 
    const updateResult = await update();
    toast.success("Library created Successfully", { duration: 2000 });
    setIsdialogOpen(false);
    form.reset(); 
    router.refresh();
  } catch (error) { 
    toast.error("Error while creating library", { duration: 2000 });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleDialogClose = () => {
    form.reset();
    setIsdialogOpen(false);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="md:min-w-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Create New Library
            </DialogTitle>
            <DialogDescription>
              Set up a new library with custom shift schedules for your team
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-3 py-2">
                <div className="space-y-2">
                  <FormField
                    control={control}
                    name="name"
                    rules={{ required: "Library name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Library Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter library name..."
                            className="text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> 
                  <div className="space-y-2">
                  <FormField
                    control={control}
                    name="seat"
                    rules={{ required: "Number of seat id required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          No of seat
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            placeholder="Enter Number of seat..."
                            className="text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">
                        Shift Schedule
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Configure your team's working shifts
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Clock className="w-3 h-3" />
                      {fields.length} shift{fields.length > 1 ? "s" : ""}
                    </Badge>
                  </div>

                  <Card className="border-slate-200 dark:border-slate-700">
                    <CardContent className="p-4">
                      {/* Header row for larger screens */}
                      <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 mb-3 border-b border-slate-200 dark:border-slate-700">
                        <div className="col-span-2 text-sm font-medium text-muted-foreground">
                          #
                        </div>
                        <div className="col-span-4 text-sm font-medium text-muted-foreground">
                          Shift Name
                        </div>
                        <div className="col-span-2 text-sm font-medium text-muted-foreground">
                          Start Time
                        </div>
                        <div className="col-span-2 text-sm font-medium text-muted-foreground">
                          End Time
                        </div>
                        <div className="col-span-2 text-sm font-medium text-muted-foreground">
                          Actions
                        </div>
                      </div>

                      {/* Shift rows */}
                      <div className="space-y-3">
                        {fields.map((field, index) => (
                          <div
                            key={field.id}
                            className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 md:p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            {/* Mobile: Shift number and delete button */}
                            <div className="flex items-center justify-between md:hidden mb-2">
                              <span className="text-sm font-medium text-muted-foreground">
                                Shift {index + 1}
                              </span>
                              {fields.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => remove(index)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 w-8 p-0"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>

                            {/* Desktop: Shift number */}
                            <div className="hidden md:flex md:col-span-1 items-center">
                              <span className="text-sm font-medium text-muted-foreground">
                                {index + 1}
                              </span>
                            </div>

                            {/* Shift Name */}
                            <div className="md:col-span-5">
                              <FormField
                                control={control}
                                name={`shifts.${index}.name`}
                                rules={{ required: "Shift name is required" }}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs text-muted-foreground md:hidden">
                                      Shift Name
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        placeholder="e.g., Morning Shift"
                                        className="mt-1 md:mt-0"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Time inputs - side by side on mobile, separate columns on desktop */}
                            <div className="grid grid-cols-2 gap-2 md:contents">
                              <div className="md:col-span-2">
                                <FormField
                                  control={control}
                                  name={`shifts.${index}.startTime`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-xs text-muted-foreground md:hidden">
                                        Start Time
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          type="time"
                                          className="mt-1 md:mt-0"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="md:col-span-2">
                                <FormField
                                  control={control}
                                  name={`shifts.${index}.endTime`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-xs text-muted-foreground md:hidden">
                                        End Time
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          type="time"
                                          className="mt-1 md:mt-0"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>

                            {/* Desktop: Delete button */}
                            <div className="hidden md:flex md:col-span-2 items-center">
                              {fields.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => remove(index)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2 pt-3 border-b border-slate-200 dark:border-slate-700">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            append({ name: "", startTime: "", endTime: "" })
                          } 
                          disabled={isSubmitting}
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDialogClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? "Creating..." : "Create Library"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateLibraryDialog;
