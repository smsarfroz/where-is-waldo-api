-- CreateTable
CREATE TABLE "public"."Leaderboards" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "timeTaken" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "settingName" TEXT NOT NULL,

    CONSTRAINT "Leaderboards_pkey" PRIMARY KEY ("id")
);
