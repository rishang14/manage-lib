import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { NotificationStatus } from "@prisma/client";
import { invitationRes } from "@/lib/serveraction";
import { startTransition } from "react";
import { toast } from "sonner";

type prop = {
  isPending: boolean;
  notifcationId: string;
};
const HandleResponseButton = ({ isPending, notifcationId }: prop) => {
  const handleInvitationResponse = (
    e: React.MouseEvent,
    notificationId: string,
    action: NotificationStatus
  ) => {
    e.stopPropagation();

    startTransition(async () => {
      try {
        const res = await invitationRes(notificationId, action);
      } catch (error) {
        toast.error("something went wrong",{duration:3000})
      }
    });
  };
  return (
    <div className="flex gap-2 mt-3 pt-2 border-t">
      <Button
        size="sm"
        className="h-7 px-3 text-xs flex-1"
        onClick={(e) => handleInvitationResponse(e, notifcationId, "ACCEPTED")}
        disabled={isPending}
      >
        <CheckCircle className="h-3 w-3 mr-1" />
        {isPending ? "Approving..." : "Approve"}
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="h-7 px-3 text-xs flex-1 bg-transparent"
        onClick={(e) => handleInvitationResponse(e, notifcationId, "REJECTED")}
        disabled={isPending}
      >
        <XCircle className="h-3 w-3 mr-1" />
        {isPending ? "Rejecting..." : "Reject"}
      </Button>
    </div>
  );
};

export default HandleResponseButton;
