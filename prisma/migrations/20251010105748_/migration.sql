/*
  Warnings:

  - Added the required column `settingid` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Settings" ADD COLUMN     "settingid" INTEGER NOT NULL;
