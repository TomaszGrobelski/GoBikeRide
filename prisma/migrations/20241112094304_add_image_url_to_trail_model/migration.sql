/*
  Warnings:

  - Added the required column `imageUrl` to the `Trail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "imageUrl" TEXT NOT NULL;
