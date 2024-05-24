-- CreateTable
CREATE TABLE "_UserPackages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserPackages_AB_unique" ON "_UserPackages"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPackages_B_index" ON "_UserPackages"("B");

-- AddForeignKey
ALTER TABLE "_UserPackages" ADD CONSTRAINT "_UserPackages_A_fkey" FOREIGN KEY ("A") REFERENCES "Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPackages" ADD CONSTRAINT "_UserPackages_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
