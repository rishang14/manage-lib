/*
  Warnings:

  - A unique constraint covering the columns `[seatId,shiftId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Booking_seatId_date_shiftId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_seatId_shiftId_key" ON "Booking"("seatId", "shiftId");
