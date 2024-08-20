-- CreateTable
CREATE TABLE "OtherPassportInfo" (
    "id" TEXT NOT NULL,
    "flightFirstName" TEXT,
    "flightLastName" TEXT,
    "flightMiddleName" TEXT,
    "flightDateOfBirth" TIMESTAMP(3),
    "flightNationality" TEXT,
    "flightPassportNumber" TEXT,
    "userId" TEXT,

    CONSTRAINT "OtherPassportInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OtherPassportInfo" ADD CONSTRAINT "OtherPassportInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
