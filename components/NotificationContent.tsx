"use client"

import type React from "react"

import { useState } from "react"
import { Eye, Clock, CheckCircle, XCircle, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NotificationDialog } from "./NotificationDialog"
// import { useNotifications } from "@/hooks/use-notifications"
// import type { Notification } from "@/types/notification"
import { cn } from "@/lib/utils"

interface NotificationDropdownListProps {
  notifications: Notification[]
}
// @ts-ignore
export function NotificationDropdownList({ notifications }) {
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
//   const { markAsRead, approveNotification, rejectNotification } = useNotifications()

//   const handleViewNotification = (notification: Notification) => {
//     if (!notification.isRead) {
//     //   markAsRead(notification.id)
//     }
//     setSelectedNotification(notification)
//     setDialogOpen(true)
//   }

  const handleApprove = (e: React.MouseEvent, notificationId: string) => {
    e.stopPropagation()
    // approveNotification(notificationId)
  }

  const handleReject = (e: React.MouseEvent, notificationId: string) => {
    e.stopPropagation()
    // rejectNotification(notificationId)
  }

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No notifications</p>
      </div>
    )
  }

  return (
    <>
      <ScrollArea className="h-96">
        <div className="p-2"> 
            {/* @ts-ignore */}
          {notifications.map((notification) => (
            <div
            //   key={notification.id}
              className={cn(
                "p-3 rounded-lg border mb-2 cursor-pointer hover:bg-accent transition-colors",
                // !notification.isRead &&
                 "bg-blue-50 border-blue-200",
              )}
            //   onClick={() => handleViewNotification(notification)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium truncate">{notification.title}</h4>
                    {/* {!notification.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />}  */}
                  </div>
                  {/* <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{notification.message}</p>  */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {/* {notification.type} */}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {/* {notification.timestamp} */}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        // handleViewNotification(notification)
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>

              {/* {notification.type === "action" && (
                <div className="flex gap-2 mt-3 pt-2 border-t">
                  <Button
                    size="sm"
                    className="h-7 px-3 text-xs flex-1"
                    onClick={(e) => handleApprove(e, notification.id)}
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 px-3 text-xs flex-1 bg-transparent"
                    onClick={(e) => handleReject(e, notification.id)}
                  >
                    <XCircle className="h-3 w-3 mr-1" />
                    Reject
                  </Button>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </ScrollArea>

      <NotificationDialog open={dialogOpen} onOpenChange={setDialogOpen} notification={selectedNotification} />
    </>
  )
}