-- CreateTable
CREATE TABLE "UserPackage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "selectedNumber" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "UserPackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPackage_userId_packageId_key" ON "UserPackage"("userId", "packageId");

-- AddForeignKey
ALTER TABLE "UserPackage" ADD CONSTRAINT "UserPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPackage" ADD CONSTRAINT "UserPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
