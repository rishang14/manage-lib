"use client";
import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { addseat } from "@/lib/serveraction";
import {
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";

type prop = {
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  libId: string;
};

export function AddSeatForm({ open, setopen, libId }: prop) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try { 
        setError(null);
        await addseat(libId, formData);
        setopen(false); 
        toast.success("seat added successfully",{duration:2000})
      } catch (err: any) {
        setError(err.message);
      }
    });
  };
  return (
    <Dialog open={open} >
      {open && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <Plus className="w-5 h-5" />
              Add New Seat
            </DialogTitle>
            <DialogDescription>
              Create a new seat in your workspace
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-6" action={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="seatnumber">Seat Number</Label>
              <Input type="text" name="seatnumber" id="seatnumber" required  disabled={isPending}/> 
              {error && <span className="text-red-500">{error}</span>}
            </div>
            <DialogFooter>
              <Button>{isPending ? "Adding seat" : "Add seat"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
