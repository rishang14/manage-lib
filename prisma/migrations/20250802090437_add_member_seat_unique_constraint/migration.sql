/*
  Warnings:

  - A unique constraint covering the columns `[memberId,seatId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_memberId_seatId_key" ON "public"."Booking"("memberId", "seatId");
