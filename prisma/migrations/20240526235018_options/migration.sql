-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "selectedPackages" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "visa_received" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "yellow_fever_vaccine" BOOLEAN NOT NULL DEFAULT false;
