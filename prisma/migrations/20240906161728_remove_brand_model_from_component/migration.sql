/*
  Warnings:

  - You are about to drop the column `brand` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Component` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Component" DROP COLUMN "brand",
DROP COLUMN "model";
