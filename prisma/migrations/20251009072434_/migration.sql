/*
  Warnings:

  - You are about to drop the `Ratios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Ratios";

-- CreateTable
CREATE TABLE "public"."Characters" (
    "id" SERIAL NOT NULL,
    "settingid" INTEGER NOT NULL,
    "charid" INTEGER NOT NULL,
    "charname" TEXT NOT NULL,
    "imglocation" TEXT NOT NULL,
    "xpercent" DOUBLE PRECISION,
    "ypercent" DOUBLE PRECISION,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_settingid_charid_key" ON "public"."Characters"("settingid", "charid");
