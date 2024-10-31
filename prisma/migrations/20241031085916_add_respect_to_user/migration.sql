/*
  Warnings:

  - You are about to drop the column `bikes_count` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `posts_count` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `routes_count` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bikes_count",
DROP COLUMN "posts_count",
DROP COLUMN "routes_count",
ADD COLUMN     "respect" INTEGER NOT NULL DEFAULT 0;
