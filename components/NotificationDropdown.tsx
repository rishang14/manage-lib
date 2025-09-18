"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { NotificationDropdownList } from "./NotificationContent";
import { Notification } from "@prisma/client";
import { Badge } from "./ui/badge";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";


export function NotificationTrigger({
  initial,
}: {
  initial: Notification[]; 
}){ 
   const  {data} =useSession(); 
   const [notification,setNotification]=useState<Notification[]>(initial)
   useEffect(()=>{
   if(!data?.user.id) return ;  


    const  event= new EventSource(`/api/notification/stream?userid=${data.user.id}&name=${data.user.name}`); 
    event.onmessage= (e)=>{
     const val=JSON.parse(e.data) 
     console.log(val,"parsed dataaa")
      console.log(val.type,'data')
     if(val.type === "notification:new"){ 
      console.log("hey inside the notification payload ",val.payload)
      setNotification(prev=> ([val.payload ,...prev]));
     } 

     if(val.type === "notification:sent"){
      console.log("hey i am inside admin notifcaiton ", val.payload) 
      setNotification(prev=> ([val.payload ,...prev]));
     } 

     if(val.type=== "notification:update"){
       handleUpdatedNotification(val.payload);
     }
    }  


    event.onerror= (err)=>{ 
     console.error("SSE error", err);
     event.close();
    } 

    return () => event.close();
   
   },[data?.user.id]) 
    
   const handleUpdatedNotification= useCallback((payload:Notification)=>{
      setNotification(prev => {
        const exists=prev.find(p =>p.id ===payload.id); 

        if(exists){
          const rest=prev.filter(p => p.id !==payload.id); 
          return [{...exists,...payload}, ...rest]; 
        }else{
          return [payload,...prev]
        }
      })
   },[])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-transparent"
        >
          <Bell className="h-4 w-4" />
          {notification && notification?.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white border-0"
            >
              {notification?.length}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end">
        <div className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <DropdownMenuLabel className="p-0 text-base font-semibold">
              Notifications
            </DropdownMenuLabel>
            {/* {unreadCount > 0 && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mark-all-read"
                  onCheckedChange={(checked) => {
                    if (checked) markAllAsRead()
                  }}
                />
                <label htmlFor="mark-all-read" className="text-sm text-muted-foreground cursor-pointer">
                  Mark all as read
                </label>
              </div>
            )} */}
          </div>
        </div>
        <DropdownMenuSeparator />
        <NotificationDropdownList
          notifications={notification as Notification[]}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
