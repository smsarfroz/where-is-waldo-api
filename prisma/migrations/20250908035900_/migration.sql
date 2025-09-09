-- CreateTable
CREATE TABLE "public"."Ratios" (
    "id" SERIAL NOT NULL,
    "settingid" INTEGER NOT NULL,
    "charid" INTEGER NOT NULL,
    "xpercent" DOUBLE PRECISION NOT NULL,
    "ypercent" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ratios_pkey" PRIMARY KEY ("id")
);
