import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button"; 
import { Shift } from "@/common/types";

type prop={
    open:boolean, 
    setopen:React.Dispatch<React.SetStateAction<boolean>>, 
    isedit:boolean,
    shift?:Shift
}
const Createnewshift = ({ open, setopen ,isedit,shift}: prop) => { 
    console.log(shift,"editing shift data ")
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <DialogTitle className="text-lg font-semibold">
              {isedit ? "Edit the shift"  :   "Create New Shift"}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                {isedit ? "You can edit anything" : "Define working hours and shift patterns"}
              </p>
            </div>
          </div>
        </DialogHeader>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="shift-name">Shift Name</Label>
            <Input
              id="shift-name"
              placeholder="e.g., Extended Morning"
              //   value={formData.name}
              //   onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time</Label>
              <Input
                id="start-time"
                type="time"
                // value={formData.startTime}
                // onChange={(e) => setFormData((prev) => ({ ...prev, startTime: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-time">End Time</Label>
              <Input
                id="end-time"
                type="time"
                // value={formData.endTime}
                // onChange={(e) => setFormData((prev) => ({ ...prev, endTime: e.target.value }))}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            {false ? "Creating Shift..." : "Create Shift"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Createnewshift;
