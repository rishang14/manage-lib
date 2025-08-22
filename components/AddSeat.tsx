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
import { Plus} from "lucide-react"; 

type prop = {
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddSeatForm({open,setopen}:prop) {
  return (
    <Dialog open={open} onOpenChange={setopen}>
      {
        open && (
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

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="seat-number">Seat Number</Label>
            <Input
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" >
              Add Seat
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
        )
      }
    </Dialog>
  );
}
