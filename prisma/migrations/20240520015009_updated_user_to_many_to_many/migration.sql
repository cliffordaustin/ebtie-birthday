/*
  Warnings:

  - You are about to drop the column `userId` on the `TripAddOn` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TripAddOn" DROP CONSTRAINT "TripAddOn_userId_fkey";

-- AlterTable
ALTER TABLE "TripAddOn" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_TripAddOnToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TripAddOnToUser_AB_unique" ON "_TripAddOnToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TripAddOnToUser_B_index" ON "_TripAddOnToUser"("B");

-- AddForeignKey
ALTER TABLE "_TripAddOnToUser" ADD CONSTRAINT "_TripAddOnToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "TripAddOn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TripAddOnToUser" ADD CONSTRAINT "_TripAddOnToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
