-- AlterTable
ALTER TABLE "User" ALTER COLUMN "arrivalDate" DROP NOT NULL,
ALTER COLUMN "arrivalFlightInfo" DROP NOT NULL,
ALTER COLUMN "departureDate" DROP NOT NULL,
ALTER COLUMN "departureFlightInfo" DROP NOT NULL;
