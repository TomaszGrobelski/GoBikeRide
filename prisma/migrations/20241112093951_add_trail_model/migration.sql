-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Low', 'Medium', 'Hard');

-- CreateEnum
CREATE TYPE "Province" AS ENUM ('Dolnoslaskie', 'KujawskoPomorskie', 'Lubelskie', 'Lubuskie', 'Lodzkie', 'Malopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Slaskie', 'Swietokrzyskie', 'WarminskoMazurskie', 'Wielkopolskie', 'Zachodniopomorskie');

-- CreateTable
CREATE TABLE "Trail" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "province" "Province" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "addedById" TEXT NOT NULL,

    CONSTRAINT "Trail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Trail_addedById_idx" ON "Trail"("addedById");

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
