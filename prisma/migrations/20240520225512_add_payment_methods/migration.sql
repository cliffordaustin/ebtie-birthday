-- CreateEnum
CREATE TYPE "PaymentMethods" AS ENUM ('CARD', 'BANK');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paymentMethod" "PaymentMethods";
