"use client";

import type React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Plus, Edit, Trash2 } from "lucide-react";
import Createnewshift from "./Createnewshift";
import { Shift } from "@/prisma/zod";
import { useState } from "react";
import DeleteShiftDialog from "./DeleteShiftDialog";

type props = {
  shifts: Shift[];
  libraryId: string;
};

export function ShiftManagement({ shifts, libraryId }: props) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isedit, setIsEdit] = useState<boolean>(false);
  const [editingShift, setEditingShift] = useState<Shift | null>(null); 
  const [openDeleteDialog,setOpenDeleteDialog]= useState<boolean>(false); 
  const [shiftid,setShiftId]=useState<string>("");

  const handleEditShift = (shiftid: string) => {
    const editingshiftdata = shifts.find((item: Shift) => item.id === shiftid);

    if (editingshiftdata) {
      setEditingShift(editingshiftdata);
      setIsEdit(true);
      setOpenDialog(true);
    }
  }; 

  const handleDeleteShift=(shiftId:string)=>{
    setShiftId(shiftId); 
    setOpenDeleteDialog(true)
  }

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
              <Button
                onClick={() => {
                  setOpenDialog(true);
                  setIsEdit(false);
                }}
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 flex items-center  text-white border-white/30 hover:border-white/50 transition-all duration-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Shift
              </Button>
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
                          const diffMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
                          const hours = Math.floor(diffMinutes / 60);
                          const minutes = diffMinutes % 60;

                          return `${hours}h ${minutes}min`;
                        })()}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => handleEditShift(shift.id as string)}
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                      onClick={() => handleDeleteShift(shift.id as string)}
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
      <Createnewshift
        open={openDialog}
        setopen={setOpenDialog}
        isedit={isedit}
        libraryId={libraryId}
        shifteditdata={editingShift as Shift}
      /> 
      <DeleteShiftDialog 
       isopen={openDeleteDialog}
       onchangeopen={setOpenDeleteDialog}
       shiftid={shiftid}
       libid={libraryId}
      /> 
      
    </>
  );
}
