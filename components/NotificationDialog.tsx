"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, User } from "lucide-react"
// import { useNotifications } from "@/hooks/use-notifications"
// import type { Notification } from "@/types/notification"

interface NotificationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  notification: Notification | null
}

export function NotificationDialog({ open, onOpenChange, notification }: NotificationDialogProps) {
  // const { approveNotification, rejectNotification } = useNotifications()

  if (!notification) return null

  // const handleApprove = () => {
  //   approveNotification(notification.id)
  //   onOpenChange(false)
  // }

  // const handleReject = () => {
  //   rejectNotification(notification.id)
  //   onOpenChange(false)
  // }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {notification.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* <Badge variant="outline">{notification.type}</Badge> */}
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {/* {notification.timestamp} */}
            </span>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm leading-relaxed">
              {/* {notification.message}
              */}
              </p>
          </div>

          {/* {notification.type === "action" && (
            <div className="flex gap-3 pt-2">
              <Button onClick={handleApprove} className="flex-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button variant="outline" onClick={handleReject} className="flex-1 bg-transparent">
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </div>
          )} */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
