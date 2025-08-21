import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShiftSchema, Shift } from "@/prisma/zod";
import { addNewShift, updateshift } from "@/lib/serveraction";
import { toast } from "sonner";
type prop = {
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  isedit: boolean;
  shifteditdata?: Shift;
  libraryId: string;
};
const initialdata = {
  name: "",
  endTime: "",
  startTime: "",
  libraryId: "",
};

const Createnewshift = ({
  open,
  setopen,
  isedit,
  shifteditdata,
  libraryId,
}: prop) => { 

  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<Shift>({
    resolver: zodResolver(ShiftSchema),
    defaultValues: initialdata,
  });
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty,isSubmitting },
  } = form;
  console.log(errors,"errors")
  useEffect(() => {
    if (isedit && shifteditdata) {
      form.reset(shifteditdata);
    } else {
      form.reset(initialdata);
    }
  }, [isedit, shifteditdata]);
  const onsubmit = async (data: Shift) => {
    try {
      if (isedit) {
        if (!isDirty) {
          toast.info("Pls change some data to update the field", {
            duration: 2000,
          });
          return;
        }
        const updatedata = await updateshift(data);
        if (updatedata) {
          toast.success("Shift is updated", { duration: 2000 });
          form.reset(updatedata.data); 
           setopen(false)
        }
        console.log(updatedata, "data in updateddata");
      } else {
        data.libraryId = libraryId;
        console.log(data, "before submitting");
        const Createnewshift = await addNewShift(data);
        if (Createnewshift) {
          toast.success("New shift is Added Successfully ", { duration: 3000 }); 
           setopen(false)
        }
      }
    } catch (error) {
      toast.error("something went wrong pls try again", { duration: 3000 });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setopen}>
      {open && (
        <DialogContent
          className="sm:max-w-md"
          key={isedit ? `${shifteditdata?.id}` : "create"}
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold">
                  {isedit ? "Edit the shift" : "Create New Shift"}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {isedit
                    ? "You can edit anything"
                    : "Define working hours and shift patterns"}
                </p>
              </div>
            </div>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Shift Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter Shift name..."
                          className="text-base" 
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormField
                    control={control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Start Time
                        </FormLabel>
                        <FormControl>
                          <Input {...field} type="time"    disabled={isSubmitting}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          End Time
                        </FormLabel>
                        <FormControl>
                          <Input {...field} type="time"   disabled={isSubmitting}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full"  disabled={isSubmitting}>
                {isSubmitting
                  ? isedit
                    ? "Updating Shift..."
                    : "Creating Shift..."
                  : isedit
                  ? "Edit Shift"
                  : "Create Shift"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Createnewshift;
