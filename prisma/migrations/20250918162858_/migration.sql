-- CreateTable
CREATE TABLE "public"."Settings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imglocation" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "credits" TEXT NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_name_key" ON "public"."Settings"("name");
