-- DropForeignKey
ALTER TABLE "Library" DROP CONSTRAINT "Library_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Library" ADD CONSTRAINT "Library_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
