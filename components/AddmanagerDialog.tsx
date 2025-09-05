import React, { useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { addmanager } from "@/lib/serveraction";
import { toast } from "sonner";
import { Session } from "next-auth";

type prop = {
  isopen: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  libid: string; 
  admin:Session
};

const AddmanagerDialog = ({ isopen, setopen, libid,admin }: prop) => {
  const [isPending, startTransition] = useTransition();
  const handlesubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      startTransition(async () => {
        const res = await addmanager(data, libid,admin);
        // @ts-ignore
        if (res?.error) {
          // @ts-ignore
          toast.error(res?.error, { duration: 2000 });
        } else {
          // @ts-ignore
          toast.success(res?.success, { duration: 3000 });
        }
      }); 
      
    } catch (error) {
      console.log(error); 
      toast.error("Internal server error",{duration:3000})
    }
  };
  return (
    <Dialog open={isopen} onOpenChange={setopen}>
      <DialogContent className="flex gap-4 flex-col">
        <DialogHeader>
          <DialogTitle>Add New Manager</DialogTitle>
        </DialogHeader>
        <form onSubmit={handlesubmit} className="">
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <Label>Enter Email Here</Label>
              <Input
                type="email"
                name="email"
                id="email"
                disabled={isPending}
                placeholder="Enter Manager Email"
              />
            </div>
          </div>
          <DialogFooter className="space-y-2 mt-3">
            <Button
              variant="outline"
              type="button"
              onClick={() => setopen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Adding" : "Add Manager"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddmanagerDialog;
