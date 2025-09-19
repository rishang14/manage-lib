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
import HandleResponseButton from "./HandleResponseButton";
import { useState } from "react";
import { useSession } from "next-auth/react";

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
  const [isPending, setPending] = useState<boolean>(false);
  const { data } = useSession();
  if (!notification) return null;

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

          {notification.type === "INVITE_MANAGER" &&
            data?.user.id === notification.receiverId &&
            notification.status === "PENDING" && (
              <HandleResponseButton
                notifcationId={notification.id}
                isPending={isPending}
              />
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
