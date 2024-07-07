-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bikes_count" REAL DEFAULT 0,
ADD COLUMN     "posts_count" REAL DEFAULT 0,
ADD COLUMN     "routes_count" REAL DEFAULT 0;

-- CreateTable
CREATE TABLE "Bike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "bikeId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "maintenanceDate" TIMESTAMP(3) NOT NULL,
    "currentState" TEXT NOT NULL,
    "currentMileageKm" DOUBLE PRECISION NOT NULL,
    "maintenanceCost" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
