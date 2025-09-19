"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { UserCheck, Plus, Mail, CalendarHeart, Trash2 } from "lucide-react";
import { Session } from "next-auth";
import { User } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { ManagerWithRoles } from "@/common/types";
import ManagersList from "./ManagersList";

type prop = {
  libid: string;
  admin: Session;
  managers: ManagerWithRoles[];
};

const ManagerTab = ({ libid, admin, managers }: prop) => {
  const [openaddmanagerDialog, setopenADDmanagerDialog] = useState(false);

  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                Manager Controls
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="text-sm text-gray-600">
                {managers && managers.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        {managers.length} manager
                        {managers.length !== 1 ? "s" : ""} in this library
                      </p>
                      <Badge variant="secondary">
                        {managers.length} Active
                      </Badge>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {managers.map((manager) => (
                        <ManagersList manager={manager} key={manager.id} libid={libid} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <UserCheck className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="font-medium text-lg mb-2">
                      No managers yet
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add managers to help you manage this library
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ManagerTab;
