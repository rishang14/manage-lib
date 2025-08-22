import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CreditCard,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";

const AddMemberDialog = ({ selectedSeat, setSelectedSeat }: any) => {  
  console.log(selectedSeat,"selectedseat")
  return (
    <Dialog open={!!selectedSeat} onOpenChange={() => setSelectedSeat(null)}> 
    { 
      
      !!selectedSeat && (
       <DialogContent className="min-w-6xl max-h-[85vh]  overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-xl font-bold">
            Seat {selectedSeat?.seatNumber} 
          </DialogTitle>
          <DialogDescription>
            Manage member assignments for this seat
          </DialogDescription>
        </DialogHeader>

        {selectedSeat && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {selectedSeat.shifts.map((shift :any) => (
                <Card
                  key={shift.id}
                  className={`relative overflow-hidden transition-all duration-200 hover:shadow-md `}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center `}
                        >
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold capitalize">
                            {shift.shifttype} 
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {shift.startTime} - {shift.endTime}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`font-medium ${
                          shift.member
                            ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        {shift.member ? "Occupied" : "Available"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4    bg-card">
                    {shift.member ? (
                      <div className="space-y-4">
                        {/* Member Info */}
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-slate-100">
                                {shift.member.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Member ID: {shift.member.id}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span className="text-slate-700 dark:text-slate-300">
                                {shift.member.phone}
                              </span>
                            </div>
                            {shift.member.email && (
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-slate-700 dark:text-slate-300">
                                  {shift.member.email}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-slate-700 dark:text-slate-300">
                                Joined:{" "}
                                {new Date(
                                  shift.member.joinedAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                       

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-white/80 hover:bg-white"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit Member
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-red-600 hover:text-red-700 bg-white/80 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          No member assigned to this shift
                        </p>
                        <Button size="sm" className="w-full">
                          <Plus className="w-4 h-4 mr-2" />
                          Assign Member
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
      )
    }  
    </Dialog>
  );
};

export default AddMemberDialog;
