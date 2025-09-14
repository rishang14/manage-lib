"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, User } from "lucide-react";
import { Notification } from "@prisma/client";

interface NotificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notification: Notification;
}
type FromData = {
  [key: string]: string;
};

export function NotificationDialog({
  open,
  onOpenChange,
  notification,
}: NotificationDialogProps) {
  // const { approveNotification, rejectNotification } = useNotifications()

  if (!notification) return null;

  // const handleApprove = () => {
  //   approveNotification(notification.id)
  //   onOpenChange(false)
  // }

  // const handleReject = () => {
  //   rejectNotification(notification.id)
  //   onOpenChange(false)
  // }
  const from = notification.data as unknown as FromData;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {from?.invitedby}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{notification.type}</Badge>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm leading-relaxed">{notification.message}</p>
          </div>

          {notification.type === "INVITE_MANAGER" && (
            <div className="flex gap-3 pt-2">
              <Button className="flex-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
