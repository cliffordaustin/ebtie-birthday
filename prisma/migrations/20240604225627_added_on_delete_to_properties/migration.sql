-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_packageId_fkey";

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;
