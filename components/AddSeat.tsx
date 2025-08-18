"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, MapPin } from "lucide-react";
// import { useToast } from "@/hooks/use-toast"

export function AddSeatForm() {
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
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex gap-2 items-center"> <Plus/>  Add New Seat</CardTitle>
        <CardDescription className="text-sm text-muted-foreground ">
           Create a new seat in your workspace
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2   items-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col justify-center">
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
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Seat..." : "Add Seat"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
