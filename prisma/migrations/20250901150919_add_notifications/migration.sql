-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('INVITE_MANAGER', 'MEMBER_ADDED', 'MEMBER_UPDATED', 'MEMBER_DELETED', 'SHIFT_CHANGE_REQUEST', 'SHIFT_CHANGE_RESPONSE', 'PAYMENT_REMINDER');

-- CreateEnum
CREATE TYPE "public"."NotificationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'READ');

-- CreateTable
CREATE TABLE "public"."Notification" (
    "id" TEXT NOT NULL,
    "type" "public"."NotificationType" NOT NULL,
    "message" TEXT NOT NULL,
    "data" JSONB,
    "status" "public"."NotificationStatus" NOT NULL DEFAULT 'PENDING',
    "senderId" TEXT,
    "receiverId" TEXT NOT NULL,
    "libraryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "public"."Library"("id") ON DELETE SET NULL ON UPDATE CASCADE;
