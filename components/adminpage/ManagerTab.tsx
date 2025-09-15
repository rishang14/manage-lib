"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { UserCheck, Plus, Activity, Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Manager } from "@/common/types";
import { Input } from "../ui/input";
import AddmanagerDialog from "../AddmanagerDialog";
import { Session } from "next-auth";
const mockManagers: Manager[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    libraryIds: ["1", "2"],
    permissions: [
      "view_members",
      "edit_members",
      "manage_payments",
      "view_reports",
    ],
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+91 9876543211",
    libraryIds: ["1"],
    permissions: ["view_members", "edit_members"],
    createdAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+91 9876543212",
    libraryIds: ["3"],
    permissions: ["view_members", "edit_members", "manage_payments"],
    createdAt: "2023-03-10",
  },
];

const mockLibraries = [
  { id: "1", name: "Central Library" },
  { id: "2", name: "North Branch" },
  { id: "3", name: "South Branch" },
];

const availablePermissions = [
  {
    id: "view_members",
    label: "View Members",
    description: "Can view member information",
  },
  {
    id: "edit_members",
    label: "Edit Members",
    description: "Can add, edit, and remove members",
  },
  {
    id: "manage_payments",
    label: "Manage Payments",
    description: "Can record and update payments",
  },
  {
    id: "view_reports",
    label: "View Reports",
    description: "Can access analytics and reports",
  },
  {
    id: "manage_seats",
    label: "Manage Seats",
    description: "Can assign and change seat arrangements",
  },
  {
    id: "send_notifications",
    label: "Send Notifications",
    description: "Can send notifications to members",
  },
];

// Mock activity logs
const mockActivityLogs = [
  {
    id: "1",
    managerId: "1",
    action: "Added new member",
    details: "Added Sarah Wilson to Central Library",
    timestamp: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    managerId: "2",
    action: "Updated payment",
    details: "Marked payment as received for John Smith",
    timestamp: "2024-01-15T09:15:00Z",
  },
  {
    id: "3",
    managerId: "1",
    action: "Changed seat assignment",
    details: "Moved Mike Davis from seat 15 to seat 22",
    timestamp: "2024-01-14T16:45:00Z",
  },
]; 

type prop={
  libid:string, 
  admin:Session
}

const ManagerTab = ({libid,admin}:prop) => {
 const [openaddmanagerDialog,setopenADDmanagerDialog]=useState(false)

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
            <Button onClick={() => setopenADDmanagerDialog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Manager
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600"></div>
          </div>
        </CardContent>
      </Card>
    </div>  
 </>
  );
};

export default ManagerTab;
