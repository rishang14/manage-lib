"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { AvatarImage } from "./ui/avatar";
const AvatarWithMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscClose(value: KeyboardEvent) { 
      if (value.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown",handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);
  return (
      <div className="relative" ref={ref}>
        <Button
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full bg-gray-800 flex items-center justify-center text-white border border-gray-700 cursor-pointer hover:bg-gray-700"
        >
          <Avatar >
            <AvatarImage src={data?.user.image} alt="userprofile pic" className="rounded-full"/>
            <AvatarFallback className="text-white">
              {data?.user.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 bg-card  flex flex-col  rounded-md shadow-lg z-50 py-2 px-3 border "
            ref={ref}
          >
            <div className="py-2 flex flex-col">
              <span className="font-medium text-gray-100">{data?.user.name}</span>
                <span className="text-sm text-gray-400">{data?.user.email}</span>
            </div>
            <div className="py-1 border-t border-gray-700">
              <Button
                variant="ghost"
                className="flex items-center w-full justify-start py-2 text-left text-gray-200 hover:bg-gray-700 hover:text-white"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign out</span>
              </Button>
            </div>
          </div>
        )}
      </div>
  );
};

export default AvatarWithMenu;


'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SimpleSidebar } from "@/components/simple-sidebar"
import { SimplifiedNavbar } from "@/components/simplified-navbar"
import { BookOpen, Users, Plus, DollarSign, MapPin, UserCheck, Crown, Settings, Eye, TrendingUp, Calendar } from 'lucide-react'

export default function FocusedLibraryDashboard() {
  // My Libraries (Physical libraries I own)
  const myLibraries = [
    {
      id: 1,
      name: "Central Library",
      location: "Downtown, Main Street",
      totalSeats: 150,
      occupiedSeats: 120,
      monthlyRevenue: 45000,
      managers: 2,
      status: "active",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Tech Hub Library",
      location: "IT Park, Sector 5",
      totalSeats: 80,
      occupiedSeats: 65,
      monthlyRevenue: 28000,
      managers: 1,
      status: "active",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Student Corner",
      location: "University Area",
      totalSeats: 200,
      occupiedSeats: 180,
      monthlyRevenue: 52000,
      managers: 3,
      status: "active",
      color: "from-purple-500 to-purple-600"
    }
  ]

  // Shared Libraries (Libraries where I'm a manager)
  const sharedLibraries = [
    {
      id: 4,
      name: "Elite Study Center",
      owner: "Sarah Johnson",
      location: "Business District",
      myRole: "Manager",
      totalSeats: 120,
      occupiedSeats: 95,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Knowledge Hub",
      owner: "Michael Chen",
      location: "Academic Zone",
      myRole: "Assistant Manager",
      totalSeats: 90,
      occupiedSeats: 70,
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const totalRevenue = myLibraries.reduce((sum, lib) => sum + lib.monthlyRevenue, 0)
  const totalSeats = myLibraries.reduce((sum, lib) => sum + lib.totalSeats, 0)
  const totalOccupied = myLibraries.reduce((sum, lib) => sum + lib.occupiedSeats, 0)
  const occupancyRate = Math.round((totalOccupied / totalSeats) * 100)

  return (
    <SidebarProvider>
      <SimpleSidebar />
      <SidebarInset>
        <SimplifiedNavbar />
        
        <div className="flex-1 space-y-6 p-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Library Dashboard</h2>
              <p className="text-muted-foreground mt-1">
                Manage your libraries and track performance
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Library
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-foreground">₹{totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-foreground">{occupancyRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Seats</p>
                    <p className="text-2xl font-bold text-foreground">{totalSeats}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">My Libraries</p>
                    <p className="text-2xl font-bold text-foreground">{myLibraries.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Libraries Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground flex items-center">
                <Crown className="h-6 w-6 text-yellow-500 mr-2" />
                My Libraries
              </h3>
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {myLibraries.map((library) => (
                <Card key={library.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${library.color} rounded-xl flex items-center justify-center`}>
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{library.name}</CardTitle>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{library.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">Owner</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Seat Occupancy</span>
                        <span className="font-medium">{library.occupiedSeats}/{library.totalSeats}</span>
                      </div>
                      <Progress value={(library.occupiedSeats / library.totalSeats) * 100} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Revenue</p>
                        <p className="font-semibold text-foreground">₹{library.monthlyRevenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Managers</p>
                        <p className="font-semibold text-foreground">{library.managers}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {library.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shared Libraries Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                Shared Libraries
              </h3>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Join Library
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sharedLibraries.map((library) => (
                <Card key={library.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${library.color} rounded-xl flex items-center justify-center`}>
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{library.name}</CardTitle>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{library.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{library.myRole}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Seat Occupancy</span>
                        <span className="font-medium">{library.occupiedSeats}/{library.totalSeats}</span>
                      </div>
                      <Progress value={(library.occupiedSeats / library.totalSeats) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {library.owner.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">Owned by {library.owner}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
