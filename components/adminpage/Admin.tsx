"use client";

import { Suspense, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Building2,
  CreditCard,
  Bell,
  UserCheck,
} from "lucide-react";
import { AdminOverview } from "./AdminOverview";
import { MemberManagement } from "./MemberManage";
import { PaymentManagement } from "./PaymentManagement";
import { NotificationCenter } from "./NotificationCenter"; 
import { Session } from "next-auth";
type LibraryDetail = {
  libid: string;
  role: "ADMIN" | "MEMBER" | "MANAGER"; // add other roles if needed
}; 

type  AdminTabs = {
  // overview: React.ReactNode;
  // members: React.ReactNode;
  managers: React.ReactNode;
  // payments: React.ReactNode;
  // notifications?: React.ReactNode; // Optional tabs
}

type prop ={
  userinfo: Session , 
  tabs:AdminTabs
}


export default function AdminDashboard({ userinfo,tabs }: prop) {
  console.log(userinfo, "info");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                   Welcome,  <span className=" text-shadow-blue-50 ">{userinfo.user.name}</span>
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Manage your  members, , payments  and managers
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4">
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Members</span>
            </TabsTrigger>
            <TabsTrigger value="managers" className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Managers</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Payments</span>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminOverview />
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <MemberManagement />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <PaymentManagement />
          </TabsContent>

          <TabsContent value="managers" className="space-y-6"> 
            <Suspense fallback={<div>loading managers details</div>}>
           { tabs.managers}
            </Suspense>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <NotificationCenter />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
