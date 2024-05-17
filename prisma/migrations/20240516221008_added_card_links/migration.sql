-- CreateTable
CREATE TABLE "CardPaymentLink" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CardPaymentLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardPaymentLink" ADD CONSTRAINT "CardPaymentLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
