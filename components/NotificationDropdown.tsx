"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { NotificationDropdownList } from "./NotificationContent"
// import { useNotifications } from "@/hooks/use-notifications"

export function NotificationTrigger() {
//   const { notifications, unreadCount, markAllAsRead } = useNotifications()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative bg-transparent">
          <Bell className="h-4 w-4" />
          {/* {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white border-0"
            >
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end">
        <div className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <DropdownMenuLabel className="p-0 text-base font-semibold">Notifications</DropdownMenuLabel>
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
        <NotificationDropdownList notifications={[] } />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}