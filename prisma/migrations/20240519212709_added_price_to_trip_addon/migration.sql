/*
  Warnings:

  - You are about to drop the column `price` on the `DietryRestriction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DietryRestriction" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "TripAddOn" ADD COLUMN     "price" DOUBLE PRECISION;
