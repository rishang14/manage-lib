/*
  Warnings:

  - You are about to drop the column `month` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startMonth` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validTill` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Payment_memberId_month_key";

-- AlterTable
ALTER TABLE "public"."Payment" DROP COLUMN "month",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "startMonth" TEXT NOT NULL,
ADD COLUMN     "validTill" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Payment_memberId_validTill_idx" ON "public"."Payment"("memberId", "validTill");
