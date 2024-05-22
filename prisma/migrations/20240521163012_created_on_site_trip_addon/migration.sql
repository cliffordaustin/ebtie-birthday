-- CreateTable
CREATE TABLE "_UserOnSiteTripAddOns" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserOnSiteTripAddOns_AB_unique" ON "_UserOnSiteTripAddOns"("A", "B");

-- CreateIndex
CREATE INDEX "_UserOnSiteTripAddOns_B_index" ON "_UserOnSiteTripAddOns"("B");

-- AddForeignKey
ALTER TABLE "_UserOnSiteTripAddOns" ADD CONSTRAINT "_UserOnSiteTripAddOns_A_fkey" FOREIGN KEY ("A") REFERENCES "TripAddOn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserOnSiteTripAddOns" ADD CONSTRAINT "_UserOnSiteTripAddOns_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
