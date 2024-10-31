-- CreateEnum
CREATE TYPE "MainMethod" AS ENUM ('Szosowy', 'Gravel', 'Gorski');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mainMethod" "MainMethod";
