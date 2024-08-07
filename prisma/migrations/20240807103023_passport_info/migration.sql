-- AlterTable
ALTER TABLE "User" ADD COLUMN     "flightDateOfBirth" TIMESTAMP(3),
ADD COLUMN     "flightFirstName" TEXT,
ADD COLUMN     "flightLastName" TEXT,
ADD COLUMN     "flightMiddleName" TEXT,
ADD COLUMN     "flightNationality" TEXT,
ADD COLUMN     "flightPassportNumber" TEXT;
