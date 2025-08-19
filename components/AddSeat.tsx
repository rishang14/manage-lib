"use client";
import type React from "react";
import { useState } from "react";
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
import { Plus, MapPin } from "lucide-react";
// import { useToast } from "@/hooks/use-toast"

export function AddSeatForm({open,setopen}) {
  const [formData, setFormData] = useState({
    number: "",
    location: "",
    type: "standard",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // toast({
    //   title: "Seat Added Successfully",
    //   description: `Seat ${formData.number} has been added to ${formData.location}`,
    // })

    setFormData({ number: "", location: "", type: "standard" });
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setopen}>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="seat-number">Seat Number</Label>
            <Input
              id="seat-number"
              placeholder="e.g., A-001"
              value={formData.number}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, number: e.target.value }))
              }
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Adding Seat..." : "Add Seat"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
