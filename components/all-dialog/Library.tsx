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
import { CreateLibraryInput } from "@/common/types";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { dialogProp } from "@/common/types";
import { useDialogstore } from "@/store/StateStore";

const CreateLibraryDialog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isCreateLibDialogOpen, setIsCreateLibdialogOpen } = useDialogstore();
  const form = useForm<CreateLibraryInput>({
    defaultValues: {
      name: "",
      ownerId: "",
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
  } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "shifts",
  });
  const router = useRouter();
  const onSubmit = async (formdata: CreateLibraryInput) => {
    console.log(errors, "errors");
    try {
      setIsSubmitting(true);
      console.log("i am invoked");
      console.log(formdata, "data");
      toast.success("Library created Successfully", { duration: 2000 });
      // form.reset();
      router.refresh();
    } catch (error) {
      toast.error("Error while creating library", { duration: 2000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleDialogClose = () => {
  //   form.reset();
  // };

  return (
    <Dialog
      open={isCreateLibDialogOpen}
      onOpenChange={setIsCreateLibdialogOpen}
    >
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto md:min-w-2xl">
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
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">
                      Shift Schedule
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      Configure your team's working shifts
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Clock className="h-3 w-3" />
                    {fields.length} shift{fields.length > 1 ? "s" : ""}
                  </Badge>
                </div>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="p-4">
                    {/* Header row for larger screens */}
                    <div className="mb-3 hidden gap-4 border-b border-slate-200 pb-3 md:grid md:grid-cols-12 dark:border-slate-700">
                      <div className="text-muted-foreground col-span-2 text-sm font-medium">
                        #
                      </div>
                      <div className="text-muted-foreground col-span-4 text-sm font-medium">
                        Shift Name
                      </div>
                      <div className="text-muted-foreground col-span-2 text-sm font-medium">
                        Start Time
                      </div>
                      <div className="text-muted-foreground col-span-2 text-sm font-medium">
                        End Time
                      </div>
                      <div className="text-muted-foreground col-span-2 text-sm font-medium">
                        Actions
                      </div>
                    </div>

                    {/* Shift rows */}
                    <div className="space-y-3">
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="grid grid-cols-1 gap-3 rounded-lg bg-slate-50 p-3 transition-colors hover:bg-slate-100 md:grid-cols-12 md:p-2 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                        >
                          {/* Mobile: Shift number and delete button */}
                          <div className="mb-2 flex items-center justify-between md:hidden">
                            <span className="text-muted-foreground text-sm font-medium">
                              Shift {index + 1}
                            </span>
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => remove(index)}
                                className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          {/* Desktop: Shift number */}
                          <div className="hidden items-center md:col-span-1 md:flex">
                            <span className="text-muted-foreground text-sm font-medium">
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
                                  <FormLabel className="text-muted-foreground text-xs md:hidden">
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
                                    <FormLabel className="text-muted-foreground text-xs md:hidden">
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
                                    <FormLabel className="text-muted-foreground text-xs md:hidden">
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
                          <div className="hidden items-center md:col-span-2 md:flex">
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => remove(index)}
                                className="text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 border-b border-slate-200 pt-3 dark:border-slate-700">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          append({ name: "", startTime: "", endTime: "" })
                        }
                        disabled={isSubmitting}
                        className="w-full border-2 border-dashed bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Shift
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button type="button" variant="outline" disabled={isSubmitting}>
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
  );
};

export default CreateLibraryDialog;
