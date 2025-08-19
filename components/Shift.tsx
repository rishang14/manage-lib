import type React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Plus, Sun, Sunset, Moon, Edit, Trash2 } from "lucide-react";
import Createnewshift from "./Createnewshift";


export async function ShiftManagement({ shifts }:any) { 
  console.log(shifts,"shifts")
  // const [openDialog,setOpenDialog]=useState<boolean>(false)
  // const [shifts, setShifts] = useState<ShiftTemplate[]>(defaultShifts);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   type: "morning" as "morning" | "afternoon" | "evening",
  //   startTime: "",
  //   endTime: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast()

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   const newShift: ShiftTemplate = {
  //     id: Date.now().toString(),
  //     ...formData,
  //   };

  //   setShifts((prev) => [...prev, newShift]);
  //   setFormData({ name: "", type: "morning", startTime: "", endTime: "" });
  //   setIsSubmitting(false);

  // toast({
  //   title: "Shift Created Successfully",
  //   description: `${formData.name} has been added to the system`,
  // })
  // };



  // const handleDeleteShift = (shiftId: string) => {
  //   setShifts((prev) => prev.filter((shift) => shift.id !== shiftId));
  //   // toast({
  //   //   title: "Shift Deleted",
  //   //   description: "Shift has been removed from the system",
  //   // })
  // };

  // const handleEditShift = (shiftId: string) => {
  //   const shift = shifts.find((s) => s.id === shiftId);
  //   if (shift) {
  //     setFormData({
  //       name: shift.name,
  //       type: shift.type,
  //       startTime: shift.startTime,
  //       endTime: shift.endTime,
  //     });
  //     //   toast({
  //     //     title: "Edit Mode",
  //     //     description: "Shift details loaded for editing",
  //     //   })
  //   }
  // };

  return (
    <>
      <div className="bg-white dark:bg-neutral-950 max-w-7xl mx-auto px-6 py-6 mt-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
        <Card className="shadow-lg  shadow-card  ">
          <CardHeader className="bg-gradient-to-r text-white rounded-t-lg">
            <div className="flex items-center  md:flex-row flex-col  md:gap-0 gap-2 justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">
                    Active Shifts
                  </CardTitle>
                  <CardDescription className="text-indigo-100 mt-1">
                    Current shift templates and schedules
                  </CardDescription>
                </div>
              </div>
              {/* <Button 
              onClick={()=>setOpenDialog(true)}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Shift
            </Button> */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shifts.map((shift) => (
                <div
                  key={shift.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{shift.name}</h3>
                    </div>
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
                          const start = new Date(
                            `2000-01-01T${shift.startTime}`
                          );
                          const end = new Date(`2000-01-01T${shift.endTime}`);
                          const diff =
                            (end.getTime() - start.getTime()) /
                            (1000 * 60 * 60);
                          return `${diff}h`;
                        })()}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      // onClick={() => handleEditShift(shift.id)}
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                      // onClick={() => handleDeleteShift(shift.id)}
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
      {/* <Createnewshift open={openDialog} setopen={setOpenDialog}/>  */}
    </>
  );
}
