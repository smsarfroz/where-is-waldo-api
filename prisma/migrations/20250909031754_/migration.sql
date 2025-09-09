/*
  Warnings:

  - A unique constraint covering the columns `[settingid,charid]` on the table `Ratios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ratios_settingid_charid_key" ON "public"."Ratios"("settingid", "charid");
